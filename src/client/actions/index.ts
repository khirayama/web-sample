import { Action } from 'redux';

export interface FetchingCount extends Action<'FETCHING_COUNT'> {}

export const fetchingCount = (): FetchingCount => {
  return {
    type: 'FETCHING_COUNT',
  };
};

export interface FetchedCount extends Action<'FETCHED_COUNT'> {}

export const fetchedCount = (): FetchedCount => {
  return {
    type: 'FETCHED_COUNT',
  };
};

export interface Increment extends Action<'INCREMENT'> {}

export const increment = (): Increment => {
  return {
    type: 'INCREMENT',
  };
};

export interface Decrement extends Action<'DECREMENT'> {}

export const decrement = (): Decrement => {
  return {
    type: 'DECREMENT',
  };
};

export interface ChangeLocale extends Action<'CHANGE_LOCALE'> {
  payload: {
    locale: string;
  };
}

export const changeLocale = (locale: string): ChangeLocale => {
  return {
    type: 'CHANGE_LOCALE',
    payload: {
      locale,
    },
  };
};
