import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Icon, Input, InputGroup, Button } from 'native-base';
import { MyHeader } from '../components/common';
import SearchBar from '../components/searchBar';
import { createSearchAction } from '../actions/index';

class LandingPage extends Component {
  // headerText="Piece Meal"
  render() {
    return (
      <Container>
        <MyHeader />
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
        <SearchBar recipes={this.props.recipes} ingredients={this.props.ingredients} />
      </Container>
    );
  }
}

const mapStateToPropsLandingPage = (state) => {
  //map state to props to the Landing Page component above
  return {
    recipes: state.searchRecipe.recipes,
    ingredients: state.searchRecipe.ingredients

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
