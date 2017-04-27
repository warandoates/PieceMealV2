import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Icon, Input, InputGroup, Button } from 'native-base';
import { MyHeader } from '../components/common';
import { createSearchAction } from '../actions/index';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ''
    };
  }

  render() {
    return (
      <Container>
        <MyHeader headerText="Piece Meal" />
        <InputGroup borderType="regular">
         <Icon name="md-search" />
          <Input
            placeholder="Search"
            onChangeText={(newText) => this.props.searchRecipe(newText)}
          />
          <Button transparent>
              <Icon name='ios-options' />
          </Button>
        </InputGroup>
      </Container>
    );
  }
}

const mapStateToPropsLandingPage = (state) => {
  return {
    recipes: state.recipes
  };
};

const mapDispatchtoPropsLandingPage = (dispatch) => {
  return {
    searchRecipe: (recipes) => {
      dispatch(createSearchAction(recipes));
    }
  };
};

const ConnectedLandingPage = connect(
  mapStateToPropsLandingPage, mapDispatchtoPropsLandingPage)(LandingPage);

export default ConnectedLandingPage;
