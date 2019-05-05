import * as React from 'react';
import { Link } from 'react-router-dom';

import { LocaleBar } from 'client/containers/LocaleBar';

export function Navigation() {
  return (
    <nav>
      <LocaleBar />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about/">About</Link>
        </li>
        <li>
          <Link to="/users/">Users</Link>
        </li>
      </ul>
    </nav>
  );
}
