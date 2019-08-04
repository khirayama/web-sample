export interface State {
  count: {
    isFetching: boolean[];
    value: number;
  };
  ui: {
    locale: string;
    pathname: string;
  };
}

export const initialState: State = {
  count: {
    isFetching: [],
    value: 1,
  },
  ui: {
    locale: 'en',
    pathname: '/',
  },
};

export function reducer(state = initialState, action: any) {
  switch (action.type) {
    case 'FETCHING_COUNT': {
      state.count.isFetching.push(true);
      return {
        count: {
          isFetching: state.count.isFetching,
          value: state.count.value,
        },
        ui: state.ui,
      };
    }
    case 'FETCHED_COUNT': {
      state.count.isFetching.shift();
      return {
        count: {
          isFetching: state.count.isFetching,
          value: state.count.value,
        },
        ui: state.ui,
      };
    }
    case 'INCREMENT': {
      return {
        count: {
          isFetching: state.count.isFetching,
          value: state.count.value + 1,
        },
        ui: state.ui,
      };
    }
    case 'DECREMENT': {
      return {
        count: {
          isFetching: state.count.isFetching,
          value: state.count.value - 1,
        },
        ui: state.ui,
      };
    }
    case 'CHANGE_LOCALE': {
      return {
        count: state.count,
        ui: {
          ...state.ui,
          locale: action.payload.locale,
        },
      };
    }
    case 'SET_PATHNAME': {
      return {
        count: state.count,
        ui: {
          ...state.ui,
          pathname: action.payload.pathname,
        },
      };
    }
    default:
  }
  return state;
}
