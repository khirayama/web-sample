import * as React from 'react';
import loadable from '@loadable/component';

import { Page } from 'client/containers/Page';
import { Application } from 'client/presentations/templates/Application';

const LoadableAboutContent = loadable((): any =>
  import(/* webpackChunkName: "about" */ 'client/presentations/pages/AboutContent').then(
    ({ AboutContent }) => AboutContent,
  ),
);

export const About = () => {
  const title = { descriptor: 'About.Title' };
  const description = { descriptor: 'About.Description' };

  return (
    <Page title={title} description={description}>
      <Application>
        <LoadableAboutContent />
      </Application>
    </Page>
  );
};
