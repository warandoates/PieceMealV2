import React, { Component } from 'react';
import { ListView, View } from 'react-native';
import { Spinner, Button, Icon } from 'native-base';
import { connect } from 'react-redux';
import IngredientItem from '../components/IngredientItem';
import GetIngredientsButton from '../components/GetIngredientButton';
import IngredientButton from '../components/IngredientNavButton';

class IngredientResultsList extends Component {
  static navigationOptions = (props) => {
      console.log('this is props', props);
    //   static navigationProps = {
    //  header: ({ state }) => {
    //    console.log('statessss', state);
    //  return {
    //   title: 'Ingredients'
    //      }
    //   }
    // }
    return {
      title: 'Ingredients',
      headerRight:
      <Button
        onPress={() => (
            props.navigation.navigate('AddIngredient')
      )}
        transparent
      >
        <Icon name="add" size={35} />
      </Button>,
      mode: 'modal'
    };
  };
//   static navigationProps = {
//  header: ({ state }) => {
//    console.log('statessss', state);
//  return {
//   title: 'Ingredients'
//      }
//   }
// }
    componentDidUpdate() {
      this.props.navigation.setParams({
       userObject: this.props.user
     });
    }


    loadDataSource() {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(this.props.list);
    }

    renderRow(rowData) {
      return <IngredientItem rowData={rowData} />;
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
            renderRow={this.renderRow}
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
