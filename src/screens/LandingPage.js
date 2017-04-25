import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Button, Text, Content } from 'native-base';

import { SearchBar } from '../components/common';


class LandingPage extends Component {

  render() {
    return (
        <Container>
          <SearchBar />
        </Container>
    );
  }
}

export default LandingPage;
