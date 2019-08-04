import * as React from 'react';
import loadable from '@loadable/component';

import { Page } from 'client/containers/Page';
import { Application } from 'client/presentations/templates/Application';

const LoadableUsersContent = loadable((): any =>
  import(/* webpackChunkName: "users" */ 'client/presentations/pages/UsersContent').then(
    ({ UsersContent }) => UsersContent,
  ),
);

export const Users = () => {
  const title = { descriptor: 'Users.Title' };
  const description = { descriptor: 'Users.Description' };

  return (
    <Page title={title} description={description}>
      <Application>
        <LoadableUsersContent />
      </Application>
    </Page>
  );
};
