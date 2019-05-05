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
import { Application } from 'client/containers/Application';

export function get(req: express.Request, res: express.Response) {
  const context = {};
  const store = createStore(reducer);
  const sheet = new styled.ServerStyleSheet();
  const body = ReactDOMServer.renderToString(
    sheet.collectStyles(
      <StaticRouter location={req.url} context={context}>
        <Provider store={store}>
          <Application />
        </Provider>
      </StaticRouter>,
    ),
  );
  const preloadedState = store.getState();
  const helmetContent = ReactHelmet.renderStatic();
  const meta = `
      ${helmetContent.meta.toString()}
      ${helmetContent.title.toString()}
      ${helmetContent.link.toString()}
    `.trim();
  const style = sheet.getStyleTags();
  // TODO: script file name;
  const scripts = `<script src="/public/index.bundle.js"></script>`;
  const assets = [''];

  res.send(
    renderFullPage({
      meta,
      assets,
      body,
      style,
      scripts,
      preloadedState: JSON.stringify(preloadedState),
    }),
  );
}
