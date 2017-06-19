import React, { Component } from 'react';
import { ListView, View, Text } from 'react-native';
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
        <Icon name="add" size={35} style={{ color: '#68BAA7' }} />
    </Button>
  );
};

const ConnectedMyButton = connect((state) => {
  return {
    loggedIn: state.loginReducer.user != null
  };
})(MyButton);

export class IngredientResultsList extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitleStyle: {
   /* this only styles the title/text (font, color etc.)  */
      },
      headerStyle: {
   /* this will style the header, but does NOT change the text */
        backgroundColor: '#68BAA7'
      },

      title: 'Ingredients',
      headerRight: <ConnectedMyButton navigation={navigation} />,
      tabBarIcon: ({ tintColor }) => (
       <Icon name='nutrition' style={{ color: '#68BAA7' }}/>
      ),
      mode: 'modal'
    };
  };

  componentDidMount() {
    this.loadDataSource();
    this.props.getIngredients();
  }

  componentDidUpdate() {
    this.loadDataSource();
  }

  loadDataSource() {
      const ds = new ListView.DataSource({
          rowHasChanged: (r1, r2) => r1 !== r2
      });

      this.dataSource = ds.cloneWithRows(this.props.list);
  }

  renderRow(rowData) {
    return <IngredientItem
       rowData={rowData}
       onPress={() => {
         this.props.navigation.navigate('ViewIngredient',
           { ingredient: rowData })
       }} />;
  }


    render() {
      this.loadDataSource();
        return (
          <View style={{ flex: 1 }}>
          {this.props.isFetching && <Spinner color="green" /> }
          {this.props.list.length > 0 && <ListView
            removeClippedSubviews={false}
            dataSource={this.dataSource}
            renderRow={this.renderRow.bind(this)}
            enableEmptySections
          />}
          </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      list: state.ingredients.ingredients,
      isFetching: state.ingredients.isFetching,
      user: state.loginReducer.user
    };
};

export default connect(mapStateToProps, { getIngredients })(IngredientResultsList);
