import express from 'express';
import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import * as styled from 'styled-components';
import ReactHelmet from 'react-helmet';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { reducer } from 'client/reducers';
import { renderFullPage } from 'server/renderFullPage';
import { Routes } from 'client/presentations/routes/Routes';
import { ResetStyle } from 'client/presentations/styles/ResetStyle';
import { GlobalStyle } from 'client/presentations/styles/GlobalStyle';
import { Intl } from 'client/containers/Intl';

const assets = (() => {
  // eslint-disable-next-line node/no-unpublished-require
  const manifest: { [key: string]: string } = require('../../dist/public/manifest');
  const entryPoints: string[] = [];

  for (const [key, value] of Object.entries(manifest)) {
    if (/^index|^vendors|^commons/.test(key)) {
      entryPoints.push(value);
    }
  }

  return entryPoints;
})();

export function get(req: express.Request, res: express.Response) {
  const context = {};
  const store = createStore(reducer);
  const preloadedState = store.getState();
  const sheet = new styled.ServerStyleSheet();
  const locale = preloadedState.ui.locale;
  const body = ReactDOMServer.renderToString(
    sheet.collectStyles(
      <StaticRouter location={req.url} context={context}>
        <ResetStyle />
        <GlobalStyle />
        <Provider store={store}>
          <Intl>
            <Routes />
          </Intl>
        </Provider>
      </StaticRouter>,
    ),
  );
  const helmetContent = ReactHelmet.renderStatic();
  const meta = `
      ${helmetContent.meta.toString()}
      ${helmetContent.title.toString()}
      ${helmetContent.link.toString()}
    `.trim();
  const style = sheet.getStyleTags();

  res.send(
    renderFullPage({
      locale,
      meta,
      assets,
      body,
      style,
      preloadedState: JSON.stringify(preloadedState),
    }),
  );
}
