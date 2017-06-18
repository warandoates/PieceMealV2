import React, { Component } from 'react';
import { Header, Item, Input, Icon, Button } from 'native-base';

export class SearchResults extends Component {
    render() {
        return (
                    <Header SearchResults rounded>
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
