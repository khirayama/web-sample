import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { State } from 'client/reducers';

export interface Props {
  pathname: string;
  to: string;
  children: React.ReactChild;
}

function Component(props: Props) {
  const to = props.to === '/' ? props.pathname : `${props.to}${props.pathname}`;
  return <Link to={to}>{props.children}</Link>;
}

const mapStateToProps = (state: State) => {
  return {
    pathname: state.ui.pathname,
  };
};

export const LocaleLink = connect(
  mapStateToProps,
  null,
)(Component);
