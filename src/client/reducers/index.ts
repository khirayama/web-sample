export interface State {
  count: {
    isFetching: boolean[];
    value: number;
  };
  ui: {
    locale: 'en' | 'ja';
  };
}

export const initialState: State = {
  count: {
    isFetching: [],
    value: 1,
  },
  ui: {
    locale: 'en',
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
          locale: action.payload.locale,
        },
      };
    }
    default:
  }
  return state;
}
