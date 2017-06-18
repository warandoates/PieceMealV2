import React, { Component } from 'react';
import { ListView, Switch } from 'react-native';
import { Container, Content, View, Card, CardItem, Text } from 'native-base';

export default class RecipeIngredients extends Component {

  componentDidMount() {
    return this.loadDataSource();
  }

  componentDidUpdate() {
    return this.loadDataSource();
  }

  loadDataSource() {
       const ds = new ListView.DataSource({
           rowHasChanged: (r1, r2) => r1 !== r2
       });

       this.dataSource = ds.cloneWithRows(this.props.ingredients);
   }

  renderRow(rowData) {
    return (
        <CardItem>
            <Switch checked />
            <Text
              style={{ fontStyle: 'italic', alignSelf: 'center', paddingLeft: 10 }}
            >
              { rowData.name }
            </Text>
        </CardItem>
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
