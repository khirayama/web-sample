import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home } from 'client/presentations/pages/Home';
import { About } from 'client/presentations/pages/About';
import { Users } from 'client/presentations/pages/Users';

export const routes = [
  {
    exact: true,
    path: '/:locale?/about',
    component: About,
    initializer: null,
  },
  {
    exact: true,
    path: '/:locale?/users',
    component: Users,
    initializer: null,
  },
  {
    exact: true,
    path: '/:locale?',
    component: Home,
    initializer: null,
  },
];

export function Routes() {
  return (
    <Switch>
      {routes.map(route => (
        <Route key={route.path} exact={route.exact} path={route.path} component={route.component} />
      ))}
    </Switch>
  );
}
