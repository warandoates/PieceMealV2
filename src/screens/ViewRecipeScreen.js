import React, { Component } from 'react';
import { Container } from 'native-base';
import RecipeView from '../components/Recipe/RecipeView';

export default class ViewRecipeScreen extends Component {
  render() {
    const params = this.props.navigation.state.params;
    return (
      <Container>
        <RecipeView recipe={params.recipe} />
      </Container>);
  }
}
