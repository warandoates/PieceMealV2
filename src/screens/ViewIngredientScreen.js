import React, { Component } from 'react';
import { Container } from 'native-base';
import IngredientView from '../components/Ingredient/IngredientView';

export default class ViewIngredientScreen extends Component {
  render() {
    const params = this.props.navigation.state.params;
    return (
      <Container>
        <IngredientView
          navigation={this.props.navigation}
          ingredient={params.ingredient}
        />
      </Container>);
  }
}
