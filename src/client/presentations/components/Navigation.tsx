import * as React from 'react';
import { Link } from 'react-router-dom';

export function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">English</Link>
        </li>
        <li>
          <Link to="/ja">日本語</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>
    </nav>
  );
}
