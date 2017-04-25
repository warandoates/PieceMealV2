import React, { Component } from 'react';
import { View } from 'react-native';
import { Container } from 'native-base';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { MyHeader, Button, Card, SearchBar } from './components/common';
import reducers from './reducers';


class App extends Component {

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Container>
          <MyHeader headerText="Piece Meal" />
        </Container>
        </View>
      </Provider>
    );
  }
}

export default App;
