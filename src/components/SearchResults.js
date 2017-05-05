//Search Bar
import React, { Component } from 'react';
import { ListView, View } from 'react-native';
import { connect } from 'react-redux';
import RecipeItem from '../components/RecipeItem';
import IngredientItem from '../components/IngredientItem';
import { getRecipes } from '../actions/index';
import { getIngredients } from '../actions/index';
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

class SearchResults extends Component {

  componentWillMount() {
    return (
      this.props.getAllRecipes(),
      this.props.getAllIngredients()
    );
  }

  loadDataSource() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(this.props.list);
  }

  renderRow(rowData) {
    return (
      <View>
      <RecipeItem rowData={rowData} />
      <IngredientItem rowData={rowData} />
    </View>
    )
  }

  render() {
    this.loadDataSource();
      return (
        <View style={{ flex: 1 }}>
          {this.props.isFetching && <Spinner color="green" /> }
          {this.props.list.length > 1 &&
          <ListView
            dataSource={this.dataSource}
            renderRow={this.renderRow}
            enableEmptySections={true}
          />
          }
        </View>
      );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllRecipes: () => {
      dispatch(getRecipes());
    },
    getAllIngredients: () => {
      dispatch(getIngredients());
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    list: state.recipeResults.recipes,
    isFetching: state.recipeResults.isFetching,
    user: state.loginReducer.user
  }
}

// = ({ ingredients, recipes }) => {
//   return (
//     <Content>
//       {ingredients.map((ingredient) => (
//         <Card>
//              <CardItem>
//                    <Text>{ ingredient.name }</Text>
//
//                  <Right>
//                    <Button><Icon name="ios-arrow-forward" /></Button>
//                  </Right>
//              </CardItem>
//          </Card>
//       ))}
//
//       {recipes.map((recipe) => (
//         <Card>
//              <CardItem>
//                    <Text>{ recipe.name }</Text>
//                  <Right>
//                    <Button><Icon name="ios-arrow-forward" /></Button>
//                  </Right>
//              </CardItem>
//          </Card>
//       ))}
//     </Content>
// )};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
