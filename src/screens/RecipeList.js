import React, { Component } from 'react';
import { ListView, View } from 'react-native';
import { Spinner, Button, Icon } from 'native-base';
import { connect } from 'react-redux';
import RecipeItem from '../components/Recipe/RecipeItem';
import { getRecipes } from '../actions/index';

const MyButton = (props) => {
  return (
    <Button
      onPress={() => {
        if (props.loggedIn) {
          props.navigation.navigate('AddRecipe');
        } else {
          props.navigation.navigate('logIn');
        }
      }}
      transparent
    >
      <Icon name="add" size={35} />
    </Button>
  );
};

const ConnectedMyButton = connect((state) => {
  return {
    loggedIn: state.loginReducer.user != null
  };
})(MyButton);

export class RecipeResultsList extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Recipes',
    headerRight: <ConnectedMyButton navigation={navigation} />,
    tabBarIcon: ({ tintColor }) => (
     <Icon name='restaurant' />
    ),
    mode: 'modal'
  });

  componentDidMount() {
    this.loadDataSource();
    return this.props.getAllRecipes();
  }

  componentWillUpdate() {
    return this.loadDataSource();
  }

  loadDataSource() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(this.props.list);
  }

  renderRow(rowData) {
    return <RecipeItem rowData={rowData} onPress={() => {
      this.props.navigation.navigate('ViewRecipe', { recipe: rowData })
    }} />;
  }

  render() {
    // this.loadDataSource();
      return (
        <View style={{ flex: 1 }}>
          {this.props.isFetching && <Spinner color="green" /> }
          {this.props.list.length > 1 &&
          <ListView
            dataSource={this.dataSource}
           renderRow={this.renderRow.bind(this)}
           enableEmptySections
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
    }
  };
};

const mapStateToProps = (state) => {
  return {
    list: state.recipeResults.recipes,
    isFetching: state.recipeResults.isFetching,
    user: state.loginReducer.user
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeResultsList);
