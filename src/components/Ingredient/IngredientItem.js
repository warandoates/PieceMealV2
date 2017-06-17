import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import {
    Icon,
    Card,
    CardItem,
    Thumbnail,
    Text,
    Right } from 'native-base';
// import RecipeModal from '../Recipe/RecipeModal';
import iceCream from '../../assets/food/ice-cream.jpg';
import bruscetta from '../../assets/food/Bruscetta.jpg';
import pepperBeef from '../../assets/food/pepperBeef.jpg';

const images = [iceCream, bruscetta, pepperBeef];

export default class IngredientItem extends Component {

  // state = {
  //     modalVisible: false,
  //     name: '',
  //     description: '',
  //     notes: ''
  // }

  render() {
      const rowData = this.props.rowData;
      return (
          <Card>
            <TouchableOpacity onPress={this.props.onPress}>
              <CardItem>
                  <Thumbnail source={images[rowData.id % images.length]} />
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

// const mapStateToProps = (state) => {
//     return {
//     };
// };
//
// export default connect(mapStateToProps)(IngredientItem);
