import React, { Component } from 'react';
import { ListView, TouchableWithoutFeedback, View } from 'react-native';
import { Card, CardItem, Text, ListItem, Header, Body, Title } from 'native-base';
import { connect } from 'react-redux';
import IngredientItem from '../components/IngredientItem';
import { selectIngredient } from '../actions/index';
// import { Header } from '../components/common';

class IngredientResultsList extends Component {
    componentWillMount() {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(this.props.list);
    }

    renderRow(rowData) {
      return <IngredientItem rowData={rowData} />;
    }

    render() {
        return (
          <View style={{ flex: 1 }}>
            <Header>
                <Body>
                    <Title>Ingredients</Title>
                </Body>
            </Header>
          <ListView
            dataSource={this.dataSource}
            renderRow={this.renderRow}
          />
          </View>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
      list: state.ingredientResults.ingredients,
      // ingredientId: state.selectedIngredientId
    };
};

export default connect(mapStateToProps)(IngredientResultsList);

// const mapDispatchToProps = (dispatch) => {
//   return {
//     selectIngredientItem: (ingredient) => {
//       dispatch(selectIngredient(ingredient));
//     }
//   };
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(IngredientResultsList);

// render() {
//     return (
//       <ListView
//         dataSource={this.dataSource}
//         renderRow={(rowData) =>
//         <Card>
//           <TouchableWithoutFeedback
//             onPress={() => this.props.selectIngredientItem(rowData.id)}
//           >
//             <View>
//               <CardItem>
//                   <Text>{rowData.name}</Text>
//               </CardItem>
//               {this.renderDescription(rowData)}
//             </View>
//           </TouchableWithoutFeedback>
//       </Card>}
//       />
//     );
// }
// }
