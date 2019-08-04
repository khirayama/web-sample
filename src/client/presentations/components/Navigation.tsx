import * as React from 'react';

import { AppLink } from 'client/containers/AppLink';
import { LocaleLink } from 'client/containers/LocaleLink';

export function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <LocaleLink to="/">English</LocaleLink>
        </li>
        <li>
          <LocaleLink to="/ja">日本語</LocaleLink>
        </li>
      </ul>
      <ul>
        <li>
          <AppLink to="/">Home</AppLink>
        </li>
        <li>
          <AppLink to="/about">About</AppLink>
        </li>
        <li>
          <AppLink to="/users">Users</AppLink>
        </li>
      </ul>
    </nav>
  );
}
