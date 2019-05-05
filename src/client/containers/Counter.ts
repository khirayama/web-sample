import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { Counter as Component } from 'client/presentations/components/Counter';
import { increment, decrement } from 'client/actions';
import { State } from 'client/reducers';

const mapStateToProps = (state: State) => {
  return {
    locale: state.ui.locale, // For react-intl
    count: state.count,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onCountUpClick: () => {
      dispatch(increment());
    },
    onCountDownClick: () => {
      dispatch(decrement());
    },
  };
};

export const Counter = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);
