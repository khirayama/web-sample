import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import { reducer } from 'client/reducers';
import { Routes } from 'client/presentations/routes/Routes';
import { ResetStyle } from 'client/presentations/styles/ResetStyle';
import { GlobalStyle } from 'client/presentations/styles/GlobalStyle';

function extractInitialState() {
  const initialDataElement = window.document.querySelector('#initial-data');
  if (initialDataElement) {
    const initialDataString = initialDataElement.getAttribute('data-json');
    if (initialDataString) {
      return JSON.parse(initialDataString);
    } else {
      return {
        count: 0,
      };
    }
  }
}

const store = createStore(reducer, extractInitialState(), applyMiddleware(reduxThunk));

window.addEventListener('DOMContentLoaded', () => {
  ReactDOM.hydrate(
    <BrowserRouter>
      <ResetStyle />
      <GlobalStyle />
      <Provider store={store}>
        <Routes />
      </Provider>
    </BrowserRouter>,
    window.document.querySelector('#root'),
  );
});
