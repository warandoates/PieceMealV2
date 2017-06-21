import React from 'react';
import { connect } from 'react-redux';
import { Button, Text } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { getIngredients } from '../../actions/index';

export const GetIngredientsButton = props => (
  <Button onPress={props.getAllIngredients} style={styles.buttonStyle} iconLeft>
    <Icon name='food-variant' size={35} />
    <Text>See All Ingredients</Text>
  </Button>
);

const styles = {
  buttonStyle: {
    marginLeft: 5,
    marginRight: 5,
  }
};

export default connect(null, { getIngredients })(GetIngredientsButton);
