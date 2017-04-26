import React, { Component } from 'react';
import { Container, Icon, Input, InputGroup, Button } from 'native-base';
import { MyHeader } from '../components/common';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ''
    };
  }

  search(text) {
    console.log("SEARCH!!!!!!!!!!", text);
  }

  render() {
    return (
      <Container>
        <MyHeader headerText="Piece Meal" />
        <InputGroup borderType="regular">
         <Icon name="md-search" />
          <Input
            placeholder="Search"
            onChangeText={(newText) => this.search(newText)}
          />
          <Button transparent>
              <Icon name='ios-options' />
          </Button>
        </InputGroup>
      </Container>
    );
  }
}

export default LandingPage;
