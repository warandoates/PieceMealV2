import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import {
    Icon,
    Card,
    CardItem,
    Thumbnail,
    Text,
    Right } from 'native-base';
// import RecipeModal from '../Recipe/RecipeModal';
import DEFAULT_IMAGE from '../../assets/food/ice-cream.jpg';

export default class IngredientItem extends Component {
  render() {
    const rowData = this.props.rowData;
    let image;
    if (rowData.image_url) {
      image = { uri: rowData.image_url };
    } else {
      image = DEFAULT_IMAGE;
    }
    return (
        <Card>
          <TouchableOpacity onPress={this.props.onPress}>
            <CardItem>
              <Thumbnail source={image} />
                <Text style={{ alignSelf: 'center', marginLeft: 25 }}>{ rowData.name }</Text>
                <Right>
                <Icon name="arrow-forward" />
                </Right>
            </CardItem>
          </TouchableOpacity>
        </Card>
    );
  }
}
