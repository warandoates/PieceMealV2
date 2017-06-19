import React, { Component } from 'react';
import { ListView, Switch } from 'react-native';
import { Container, Content, View, Card, CardItem, Text } from 'native-base';

export default class RecipeSteps extends Component {

  state = {
    toggled: false
  }

  toggleSwitch() {
      this.setState({ toggled: !this.state.toggled });
  }

  loadDataSource() {
       const ds = new ListView.DataSource({
           rowHasChanged: (r1, r2) => r1 !== r2
       });

       this.dataSource = ds.cloneWithRows(this.props.instructions);
   }

  renderRow(rowData) {
    return (
        <CardItem>
            <Switch value={this.state.toggled} onValueChange={() => { this.toggleSwitch(); }} />
            {/* <Switch value={this.state.toggled} onValueChange={() => { this.value = !this.value; }} /> */}
            <Text
              style={{ fontStyle: 'italic',
                       alignSelf: 'center',
                       paddingLeft: 10,
                       fontFamily: 'Futura',
                       color: '#373737'
                    }}
            >
              { rowData.instructions }
            </Text>
        </CardItem>

        // <Card >
        //     <CardItem>
        //         <Text
        //           style={{ fontStyle: 'italic',
        //                    alignSelf: 'center',
        //                    fontFamily: 'Futura',
        //                    fontSize: 14,
        //                    color: '#373737',
        //                    flex: 3 }}
        //         >
        //           { rowData.instructions }
        //         </Text>
        //     </CardItem>
        // </Card>
    );
  }

  render() {
    this.loadDataSource();
      return (
        <Content>
          <View style={{ marginBottom: 35 }}>
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
