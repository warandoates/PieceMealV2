import React, { Component } from 'react';
import { ListView, View, StyleSheet } from 'react-native';
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
      <Icon name="add" size={35} style={{ color: '#68BAA7' }} />
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
    headerTitleStyle: {
 /* this only styles the title/text (font, color etc.)  */
      color: '#373737'
    },
    headerStyle: {
 /* this will style the header, but does NOT change the text */
      backgroundColor: '#68BAA7'
    },
    title: 'Recipes',
    headerRight: <ConnectedMyButton navigation={navigation} />,
    tabBarIcon: ({ tintColor }) => (
     <Icon name='restaurant' style={{ color: '#68BAA7' }}/>
    ),
    mode: 'modal'
  });

  componentDidMount() {
    this.loadDataSource();
    return this.props.getRecipes();
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
    return (
      <RecipeItem
        rowData={rowData}
        onPress={() => {
        this.props.navigation.navigate('ViewRecipe', { recipe: rowData });
        }}
      />
    );
  }

  render() {
    this.loadDataSource();
      return (
        <View style={styles.container}>
          {this.props.isFetching && <Spinner color="green" /> }
          {this.props.list.length > 0 &&
          <ListView
            removeClippedSubviews={false}
            dataSource={this.dataSource}
            renderRow={this.renderRow.bind(this)}
            enableEmptySections
          />
         }
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

const mapStateToProps = (state) => {
  return {
    list: state.recipeResults.recipes,
    isFetching: state.recipeResults.isFetching,
    user: state.loginReducer.user
  };
};

export default connect(mapStateToProps, { getRecipes })(RecipeResultsList);
