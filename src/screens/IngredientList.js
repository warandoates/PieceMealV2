import React, { Component } from 'react';
import { ListView, View } from 'react-native';
import { Text, Header, Body, Title, Spinner } from 'native-base';
import { connect } from 'react-redux';
import IngredientItem from '../components/IngredientItem';
import GetIngredientsButton from '../components/GetIngredientButton';



class IngredientResultsList extends Component {
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
      console.log(this.props.list);
        return (
          <View style={{ flex: 1 }}>
            <Header>
                <Body>
                    <Title>Ingredients</Title>
                </Body>
            </Header>
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
      isFetching: state.ingredientResults.isFetching
    };
};

export default connect(mapStateToProps)(IngredientResultsList);
