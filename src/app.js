import promiseMiddleware from 'redux-promise-middleware';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
// import { StackNavigator } from 'react-navigation';
import reducers from './reducers';
import { Tabs } from './config/router';

const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(promiseMiddleware()),
  ));

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Tabs />
      </Provider>
    );
  }
}

export default App;
