import React, { Component } from 'react';
import { ListView, TouchableWithoutFeedback, View } from 'react-native';
import { Card, CardItem, Text } from 'native-base';
import { connect } from 'react-redux';
import IngredientItem from '../components/IngredientItem';
import { selectIngredient } from '../actions/index';

class IngredientResultsList extends Component {
    componentWillMount() {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(this.props.list);
    }

    renderDescription(rowData) {
      if (rowData.id === this.props.ingredientId) {

      }
    }

    render() {
        return (
          <ListView
            dataSource={this.dataSource}
            renderRow={(rowData) =>
            <Card>
              <TouchableWithoutFeedback
                onPress={() => this.props.selectIngredientItem(rowData.id)}
              >
                <View>
                  <CardItem>
                      <Text>{rowData.name}</Text>
                  </CardItem>
                </View>
              </TouchableWithoutFeedback>
          </Card>}
          />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
      list: state.ingredientResults.ingredients,
      ingredientId: state.selectedIngredientId
    };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectIngredientItem: (ingredient) => {
      dispatch(selectIngredient(ingredient));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IngredientResultsList);
