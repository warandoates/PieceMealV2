import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import {
    Icon,
    Card,
    CardItem,
    Thumbnail,
    Text,
    Right } from 'native-base';
import DEFAULT_IMAGE from '../../assets/food/ice-cream.jpg';

export default class IngredientItem extends Component {
  render() {
    const rowData = this.props.rowData;
    let name = rowData.name || '';
    name = name.split(' ').map((str) => {
      return str.substring(0, 1).toUpperCase() + str.substring(1);
    }).join(' ');
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
                <Text style={styles}>{name}</Text>
                <Right>
                  <Icon name="arrow-forward" style={{ color: '#68BAA7' }} />
                </Right>
            </CardItem>
          </TouchableOpacity>
        </Card>
    );
  }
}

const styles = {
  alignSelf: 'center',
  marginLeft: 25,
  fontFamily: 'Futura',
  fontSize: 16,
  color: '#373737'
};
