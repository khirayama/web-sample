import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { State } from 'client/reducers';

export interface Props {
  locale: string;
  to: string;
  children: React.ReactChild;
}

function Component(props: Props) {
  const to = `${props.locale ? `/${props.locale}` : ''}${props.to}`;
  return <Link to={to}>{props.children}</Link>;
}

const mapStateToProps = (state: State) => {
  return {
    locale: state.ui.locale === 'en' ? '' : state.ui.locale,
  };
};

export const AppLink = connect(
  mapStateToProps,
  null,
)(Component);
