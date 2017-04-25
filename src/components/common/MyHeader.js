import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Left, Button, Icon, Body, Title, Right, Container, Content, ListItem, Text, CheckBox } from 'native-base';

export class MyHeader extends Component {
    render() {
        return (
            <Header>
                <Left>
                    <Button transparent>
                        <Icon name='menu' />
                    </Button>
                </Left>
                <Body>
                    <Title>{this.props.headerText}</Title>
                </Body>
                <Right>
                  <Button transparent>
                      <Icon name='search' />
                  </Button>
                </Right>
            </Header>
        );
    }
}

const styles = {
  viewStyles: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};
