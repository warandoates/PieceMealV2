import React, { Component } from 'react';
import { ListView, View } from 'react-native';
import { Header, Body, Title, Spinner, Button, Icon } from 'native-base';
import { connect } from 'react-redux';
import IngredientItem from '../components/IngredientItem';
import GetIngredientsButton from '../components/GetIngredientButton';

class IngredientResultsList extends Component {
  static navigationOptions = ({ navigation, header }) => ({
      title: 'Ingredients',
      headerRight:
      <Button
        onPress={() => navigation.navigate('AddIngredient')}
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
      return <IngredientItem rowData={rowData} />;
    }

    render() {
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
    };
};

export default connect(mapStateToProps)(IngredientResultsList);
