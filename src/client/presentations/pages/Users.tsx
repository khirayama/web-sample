import * as React from 'react';
import { injectIntl } from 'react-intl';
import loadable from '@loadable/component';

import { Head } from 'client/presentations/head/Head';
import { Application } from 'client/presentations/templates/Application';

const LoadableUsersContent = loadable(
  (): any =>
    import(/* webpackChunkName: "users" */ 'client/presentations/pages/UsersContent').then(
      ({ UsersContent }) => UsersContent,
    ),
);

export const Users = injectIntl(function(props) {
  const title: string = props.intl.formatMessage({ id: 'Users.Title' });
  const description: string = props.intl.formatMessage({
    id: 'Users.Description',
  });

  return (
    <Application>
      <Head title={title} description={description} />
      <LoadableUsersContent />
    </Application>
  );
});
