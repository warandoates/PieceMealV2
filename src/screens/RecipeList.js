import React, { Component } from 'react';
import { ListView, View } from 'react-native';
import { Header, Body, Title, Spinner, Button, Icon } from 'native-base';
import { connect } from 'react-redux';
import RecipeItem from '../components/RecipeItem'
import GetRecipeButton from '../components/GetRecipeButton'

class RecipeResultsList extends Component {
  static navigationOptions = ({ navigation, header }) => ({
    title: 'Recipes',
    headerRight:
    <Button
      onPress={() => navigation.navigate('AddRecipe')}
      transparent
    >
      <Icon name="add" size={35} />
    </Button>,
    mode: 'modal'
  });

  loadDataSource() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(this.props.list);
  }

  renderRow(rowData) {
    return <RecipeItem rowData={rowData} />;
  }

  render() {
    this.loadDataSource();
      return (
        <View style={{ flex: 1 }}>
          <GetRecipeButton />
          {this.props.isFetching && <Spinner color="green" /> }
          {this.props.list.length > 1 && <ListView dataSource={this.dataSource}
                                                   renderRow={this.renderRow}/>
          }
        </View>
      );
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  return {
    list: state.recipeResults.recipes,
    isFetching: state.recipeResults.isFetching
  };
};

export default connect(mapStateToProps)(RecipeResultsList);
