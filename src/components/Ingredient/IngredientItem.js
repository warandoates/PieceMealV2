import React, { Component } from 'react';
import { ListView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import {
    Container,
    Content,
    Icon,
    View,
    Card,
    CardItem,
    Thumbnail,
    Text,
    Right } from 'native-base';
// import RecipeModal from '../Recipe/RecipeModal';
import iceCream from '../../assets/food/ice-cream.jpg';
import bruscetta from '../../assets/food/Bruscetta.jpg';
import pepperBeef from '../../assets/food/Pepper Beef.jpg';

const images = [iceCream, bruscetta, pepperBeef];

class IngredientItem extends Component {

  state = {
      modalVisible: false,
      name: '',
      description: '',
      notes: ''
  }

  render() {
      let rowData = this.props.rowData;
      return (
          <Card>
                  <CardItem>
                      <Thumbnail source={images[rowData.id - 1]} />
                      <Text style={{ alignSelf: 'center', marginLeft: 25 }}>{ rowData.name }</Text>
                      <Right>
                      <Icon name="arrow-forward" />
                      </Right>
                  </CardItem>
          </Card>
      );
  }
}

const mapStateToProps = (state) => {
    return {
    };
};

export default connect(mapStateToProps)(IngredientItem);
