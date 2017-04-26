import React, { Component } from 'react';
import { ListView, View, Text } from 'react-native';
import { List, ListItem } from 'native-base';
import { connect } from 'react-redux';
import IngredientItem from '../components/IngredientItem';
import { Card, CardSection } from '../components/common';

class IngredientResultsList extends Component {
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
  });

  this.dataSource = ds.cloneWithRows(this.props.list);
}

  renderRow(ingredient) {
    return <IngredientItem ingredient={ingredient} />;
  }


  render() {
    // const cards = this.props.list.map(card => <Card></Card>)
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={(rowData) => <Card><CardSection><Text>{rowData.name}</Text></CardSection></Card>}
      />
    );
    // return (
    //   <ListView
    //     style={styles.container}
    //     dataSource={this.dataSource}
    //     renderRow={(data) => <View><Text>{data}</Text></View>}
    //   />
    // );
  }
}

// const styles = {
//   container: {
//     flex: 1,
//     marginTop: 20
//   }
// };


const mapStateToProps = (state, ownProps) => {
  // console.log('this is state', state.ingredientResults);
  return {
    list: state.ingredientResults.ingredients
  };
};

export default connect(mapStateToProps)(IngredientResultsList);
