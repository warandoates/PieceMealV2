//Search Bar
import React, { Component } from 'react';
import { ListView, View, StyleSheet } from 'react-native';
import { Spinner } from 'native-base';
import RecipeItem from '../components/Recipe/RecipeItem';
import IngredientItem from '../components/Ingredient/IngredientItem';

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
          <IngredientItem rowData={rowData} onPress={() => {
            this.props.navigation.navigate('ViewIngredient',
              { ingredient: rowData })
          }} />
        </View>
      );
    } else {
      return (
        <View>
          <RecipeItem style={styles.text} rowData={rowData} onPress={()=>{
            this.props.navigation.navigate('ViewRecipe', { recipe: rowData })
          }} />
        </View>
      );
    }
  }

  render() {
      const ds = this.loadDataSource();
      return (
        <View style={{ flex: 1 }}>
          {this.props.isFetching && <Spinner color="#636B46" /> }
          <ListView
            style={styles.container}
            dataSource={ds}
            renderRow={this.renderRow.bind(this)}
            enableEmptySections
            removeClippedSubviews={false}
          />
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
    fontFamily: 'Times New Roman'
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  }
});
