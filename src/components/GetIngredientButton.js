import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Content, Button, Text } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { getIngredients } from '../actions/index';

class GetIngredientsButton extends Component {
  render() {
    return (
          <Button onPress={this.props.getAllIngredients()} style={styles.buttonStyle} iconLeft>
            <Icon name='food-variant' size={35} />
            <Text>See All Ingredients</Text>
          </Button>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllIngredients: () => {
      dispatch(getIngredients());
    }
  };
};

const styles = {
  buttonStyle: {
    // flex: 1,
    marginLeft: 5,
    marginRight: 5,

  }
};


export default connect(null, mapDispatchToProps)(GetIngredientsButton);
