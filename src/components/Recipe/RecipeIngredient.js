import React, { Component } from 'react';
import { ListView } from 'react-native';
import { Container, Content, View, Card, CardItem, Text } from 'native-base';

export default class RecipeIngredient extends Component {
  loadDataSource() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(this.props.ingredients);
  }

  renderRow(rowData) {
    return (
      <Card transparent>
        <CardItem>
          <Text
            style={{ fontStyle: 'italic', alignSelf: 'center', flex: 3}}
            >
              { rowData.name }
          </Text>
        </CardItem>
      </Card>
    );
  }

  render() {
    this.loadDataSource();
    return (
      <Container>
        <Content>
          <View>
            <ListView
              dataSource={this.dataSource}
              renderRow={this.renderRow.bind(this)}
              enableEmptySections
            />
          </View>
        </Content>
      </Container>
    );
  }
}
