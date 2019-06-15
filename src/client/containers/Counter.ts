import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { connect } from 'react-redux';

import { Counter as Component } from 'client/presentations/components/Counter';
import { increment, decrement } from 'client/actions';
import { asyncIncrement, asyncDecrement } from 'client/usecases';
import { State } from 'client/reducers';

const mapStateToProps = (state: State) => {
  return {
    locale: state.ui.locale, // For react-intl
    count: state.count,
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, Action>) => {
  return {
    onCountUpClick: () => {
      dispatch(increment());
    },
    onCountDownClick: () => {
      dispatch(decrement());
    },
    onCountUpAsyncClick: () => {
      dispatch(asyncIncrement());
    },
    onCountDownAsyncClick: () => {
      dispatch(asyncDecrement());
    },
  };
};

export const Counter = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);
