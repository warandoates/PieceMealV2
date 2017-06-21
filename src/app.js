import React, { Component } from 'react';
import { Provider } from 'react-redux';
import promiseMiddleware from 'redux-promise-middleware';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';

import reducers from './reducers';
import { MainRouter } from './config/router';

const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(promiseMiddleware()),
));

console.warn();
console.ignoredYellowBox = [''];

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainRouter />
      </Provider>
    );
  }
}

export default App;
