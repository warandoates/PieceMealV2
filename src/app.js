import React, { Component } from 'react';
import { View } from 'react-native';
import { Container } from 'native-base';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import { StackNavigator } from 'react-navigation';
import reducers from './reducers';
import { Tabs } from './config/router';

class App extends Component {

  render() {
    return (

      <Provider store={createStore(reducers)}>
        <Tabs />
      </Provider>
    );
  }
}

export default App;
