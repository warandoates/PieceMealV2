//Search Bar
import React, { Component } from 'react';
import { ListView, View } from 'react-native';
import { connect } from 'react-redux';
import RecipeItem from '../components/RecipeItem';
import IngredientItem from '../components/IngredientItem';
import {
    Content,
    Card,
    CardItem,
    Text,
    Icon,
    Right,
    Button,
    Header,
    Body,
    Title,
    Spinner
} from 'native-base';

export default class SearchResults extends Component {
  loadDataSource() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.props.recipes.forEach((r) => { r.type = 'recipe'; });
    this.props.ingredients.forEach((i) => { i.type = 'ingredient'; });
    const combined = this.props.recipes.concat(
      this.props.ingredients);
    return ds.cloneWithRows(combined);
  }

  renderRow(rowData) {
    if (rowData.type === 'ingredient') {
      return (
        <View>
          <IngredientItem rowData={rowData} />
        </View>
      );
    } else {
      return (
        <View>
          <RecipeItem rowData={rowData} />
        </View>
      );
    }
  }

  render() {
      const ds = this.loadDataSource();
      return (
        <View style={{ flex: 1 }}>
          {this.props.isFetching && <Spinner color="green" /> }
          <ListView
            dataSource={ds}
            renderRow={this.renderRow}
            enableEmptySections={true}
          />
        </View>
      );
  }
}
