import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Text } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { getRecipes } from '../../actions/index';

export class GetRecipeButton extends Component {
  render() {
    return (
      <Button
        onPress={this.props.getAllRecipes}
        style={styles.buttonStyle}
        iconLeft
      >
        <Icon name='food-variant' size={35} />
        <Text>See All Recipes</Text>
      </Button>
    );
  }
}

const styles = {
  buttonStyle: {
    marginLeft: 5,
    marginRight: 5
  }
};

export default connect(null, { getRecipes })(GetRecipeButton);
