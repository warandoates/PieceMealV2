import React, { Component } from 'react';
import { ListView, View } from 'react-native';
import { Spinner, Button, Icon } from 'native-base';
import { connect } from 'react-redux';
import IngredientItem from '../components/IngredientItem';
import GetIngredientsButton from '../components/GetIngredientButton';


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
      mode: 'modal'
    };
  };

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
      console.log('the true ones', this.props);
      this.loadDataSource();
        return (
          <View style={{ flex: 1 }}>
            <GetIngredientsButton />
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

const mapStateToProps = (state, ownProps) => {

    return {
      list: state.ingredientResults.ingredients,
      isFetching: state.ingredientResults.isFetching,
      user: state.loginReducer.user
    };
};

export default connect(mapStateToProps)(IngredientResultsList);
