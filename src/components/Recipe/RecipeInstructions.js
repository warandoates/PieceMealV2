import React, { Component } from 'react';
import { ListView } from 'react-native';
import { Container, Content, View, Card, CardItem, Text } from 'native-base';

// export default class RecipeInstructions extends Component {
//
//
//   render() {
//     const instructions = this.props.instructions;
//     console.log(instructions);
//     return (
//       <Content>
//         <View>
          {/* { instructions.map((instruction, id) => {
              const instructionStyle = {
                fontStyle: 'normal',
                alignSelf: 'center',
                flex: 3,
                fontFamily: 'Futura',
                fontSize: 16,
                color: '#373737'
              };
              const idStyle = {
                fontStyle: 'italic',
                fontFamily: 'Futura',
                fontSize: 22,
                color: '#68BAA7'
              }

            return (
              <CardItem>
                <Text style={idStyle}> { id + 1 } </Text>
                <Text style={instructionStyle}> { instruction } </Text>
              </CardItem>
            );
          })} */}
      //   </View>
      // </Content>
//     );
//   }
// }

export default class RecipeInstructions extends Component {
  loadDataSource() {
       const ds = new ListView.DataSource({
           rowHasChanged: (r1, r2) => r1 !== r2
       });

       this.dataSource = ds.cloneWithRows(this.props.instructions);
   }

  renderRow(rowData) {
    return (
        <CardItem>
            <Text style={{ fontStyle: 'italic',
                           fontFamily: 'Futura',
                           fontSize: 22,
                           color: '#68BAA7'
                        }}
            >
              { rowData.step_number }
            </Text>
            <Text
              style={{ fontStyle: 'italic',
                       alignSelf: 'center',
                       paddingLeft: 10,
                       fontFamily: 'Futura',
                       fontSize: 14,
                       color: '#373737'
                    }}
            >
              { rowData.instructions }
            </Text>
        </CardItem>
    );
  }

  render() {
    this.loadDataSource();
      return (
        <Content>
          <View style={{ marginBottom: 25 }}>
            <ListView
              enableEmptySections
              dataSource={this.dataSource}
              renderRow={this.renderRow.bind(this)}
            />
          </View>
        </Content>
      );
    }
}
