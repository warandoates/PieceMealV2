import React from 'react';
import { Header, Button, Icon, Title, Body, Right, Left } from 'native-base';

function RecipeHeader(props) {
  return (
    <Header color='#F8EEE7' >
      <Left />
        <Body>
            <Title>Recipes</Title>
        </Body>
        <Right>
          <Button
            onPress={() => props.navigationHero.navigation.navigate('Home')}
            transparent
          >
            <Icon name="add" size={35} />
          </Button>
        </Right>
    </Header>
  );
}

export default RecipeHeader;
