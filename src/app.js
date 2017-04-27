import React, { Component } from 'react';
import { Provider } from 'react-redux';
import promiseMiddleware from 'redux-promise-middleware';
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
// import { StackNavigator } from 'react-navigation';
import reducers from './reducers';
import { Tabs } from './config/router';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(reducers, composeEnhancers(
//     applyMiddleware(promiseMiddleware())
//   ));

const store = createStore(reducers, /* preloadedState, */ composeWithDevTools(
  applyMiddleware(promiseMiddleware()),
  // other store enhancers if any
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
