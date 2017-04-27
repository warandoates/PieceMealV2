import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Text } from 'react-native';
import { Container, Icon, Input, InputGroup, Button } from 'native-base';
import { MyHeader } from '../components/common';
import RecipeCardList from '../components/RecipeCardList';

import { createSearchAction } from '../actions/index';
// import { RecipeCardList } from '../components/RecipeCardList'

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
        <RecipeCardList recipes={this.props.recipes} ingredients={this.props.ingredients} />
      </Container>
    );
  }
}

const mapStateToPropsLandingPage = (state) => {
  //map state to props to the Landing Page component above
  console.log("STATE=>", state);
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
