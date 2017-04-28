import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Header, Item, Input, Icon, Button, Text, InputGroup} from 'native-base';

export class SearchBar extends Component {
    render() {
        return (
                    <Header searchBar rounded>
                      <Button transparent>
                          <Icon name='menu' />
                      </Button>
                      <Item >
                          <Icon name="ios-search" />
                          <Input placeholder="Search" />
                      </Item>
                      <Button transparent>
                          <Icon name='ios-options' />
                      </Button>
                    </Header>
        );
    }
}
