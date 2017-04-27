import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';

class IngredientItem extends Component {
  render() {
    console.log('am i an action?', this.props.ingredient);
    return (
    <CardSection>

      <Text>{this.props.ingredient}</Text>
    </CardSection>
    );
  }
}

export default IngredientItem;
