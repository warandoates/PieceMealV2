import React, {Component} from 'react';
import {View} from 'react-native';
import {
    Container,
    Header,
    Item,
    Input,
    Icon,
    Button,
    Text,
    InputGroup
} from 'native-base';

export class SearchBar extends Component {

    search(input) {
      let promise1 = fetch('https://piecemeal-api.herokuapp.com/api/v1/search/recipes?text=a')
          .then((response) => response.json());
      let promise2 = fetch('https://cheeswhiz.herokuapp.com/api/cheese/substitute/Brie')
          .then((response) => response.json());
      let both = Promise.all([promise1, promise2]);
      both.then((bothResults) => {
        console.log("got result 1:", bothResults[0]);
        console.log("got result 2:", bothResults[1]);
      })
    }

    // trySearch(input) {
    //   let promise1 = fetch('https://cheeswhiz.herokuapp.com/api/cheese/substitute/Swiss')
    //       .then((response) => response.json());
    //   let promise2 = fetch('https://cheeswhiz.herokuapp.com/api/cheese/substitute/Brie')
    //   let both = Promise.all([promise1, promise2]);
    //   both.then((bothResults) => {
    //     console.log("got result 1:", bothResults[0]);
    //     console.log("got result 2:", bothResults[1]);
    //   })
    // }

    render() {
        return (
            <Header searchBar rounded>
                <Button transparent>
                    <Icon name='menu'/>
                </Button>
                <Item >
                    <Icon name="ios-search"/>
                    <Input placeholder="Search"
                           onChange={(event) => {
                             this.search(event.target.value)
                           }}/>
                </Item>
                <Button transparent>
                    <Icon name='ios-options'/>
                </Button>
            </Header>
        );
    }
}
