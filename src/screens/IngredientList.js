import React, { Component } from 'react';
import { ListView, View } from 'react-native';
import { Spinner, Button, Icon } from 'native-base';
import { connect } from 'react-redux';
import IngredientItem from '../components/Ingredient/IngredientItem';
import { getIngredients } from '../actions/index';


const MyButton = (props) => {
  return (
    <Button
      onPress={() => {
        if (props.loggedIn) {
          props.navigation.navigate('AddIngredient');
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

class IngredientResultsList extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Ingredients',
      headerRight: <ConnectedMyButton navigation={navigation} />,
      tabBarIcon: ({ tintColor }) => (
       <Icon name='nutrition' />
      ),
      mode: 'modal'
    };
  };

  componentDidMount() {
    return this.props.getAllIngredients();
  }

  loadDataSource() {
      const ds = new ListView.DataSource({
          rowHasChanged: (r1, r2) => r1 !== r2
      });

      this.dataSource = ds.cloneWithRows(this.props.list);
  }

  renderRow(rowData) {
    return <IngredientItem nav={this.props} rowData={rowData} />;
  }


    render() {
      // this.props.getAllIngredients()
      this.loadDataSource();
        return (
          <View style={{ flex: 1 }}>
          {this.props.isFetching && <Spinner color="green" /> }
          {this.props.list.length > 1 && <ListView
            dataSource={this.dataSource}
            renderRow={this.renderRow.bind(this)}
            // enableEmptySections={true}
          />}
          </View>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllIngredients: () => {
      dispatch(getIngredients());
    }
  };
};

const mapStateToProps = (state) => {
    return {
      list: state.ingredientResults.ingredients,
      isFetching: state.ingredientResults.isFetching,
      user: state.loginReducer.user
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(IngredientResultsList);
