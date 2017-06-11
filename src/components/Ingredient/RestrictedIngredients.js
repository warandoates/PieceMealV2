import React, { Component } from 'react';
import { ListView, TouchableWithoutFeedback, View } from 'react-native';
import { Button, ListItem, Text, Icon } from 'native-base';

export default class CheckBoxExample extends Component {

  loadDataSource() {
      const ds = new ListView.DataSource({
          rowHasChanged: (r1, r2) => r1 !== r2
      });

      this.dataSource = ds.cloneWithRows(this.props.list);
  }

  render() {
    this.loadDataSource();
    return (
      <TouchableWithoutFeedback
        onPress={() => this.onPress()}
      >
        <View>
          <ListView
            dataSource={this.dataSource}
            enableEmptySections
            renderRow={
              (rowData) =>
                <ListItem style={styles.containerStyle}>
                  <Button primary small>
                    <Icon name='beer' />
                  </Button>
                  <Text>{rowData.name}</Text>
                </ListItem>}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    borderColor: '#ddd'
  },
  expandedContainerStyle: {
    backgroundColor: '#e5e5e5',
    borderBottomWidth: 1,
    borderColor: '#ccc'
  },
  nameStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};
