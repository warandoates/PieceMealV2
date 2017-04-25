import React, { Component } from 'react';
import { View } from 'react-native';
import { Container } from 'native-base';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { SearchBar } from './components/common';
import reducers from './reducers';
import { stackNavigator } from 'react-navigation';


class App extends Component {

  render() {
    return (

      <Provider store={createStore(reducers)}>
        <View>
        <Container>
          <SearchBar />
        </Container>
      </View>
      </Provider>
    );
  }
}

export default App;
