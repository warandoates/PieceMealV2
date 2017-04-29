import React, { Component } from 'react';
import { Header, Button, Icon, Title, Body, Right, Left } from 'native-base';
import { NavigationActions } from 'react-navigation';

class IngredientHeader extends Component {

  render() {
    return (
      <Header>
        <Left />
          <Body>
              <Title>Ingredients</Title>
          </Body>
          <Right>
            <Button onPress={() => this.props.navigationHero.navigation.navigate('Home')} transparent>
              <Icon name="add" size={35} />
            </Button>
          </Right>
      </Header>
    );
  }
}

// const navigateAction = NavigationActions.navigate({
//   routeName: 'home'
// });

export default IngredientHeader;
// onPress={this.props.navigation.dispatch(navigateAction)}
