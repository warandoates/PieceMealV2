//Search Bar
import React from 'react';
import { Image } from 'react-native';
import {
    Content,
    Card,
    CardItem,
    Text,
    Icon,
    Right,
    Button
} from 'native-base';

const SearchBar = ({ ingredients, recipes }) => {
  return (

    <Image style={styles.containerStyle} source={require('../assets/appBackgound.png')}>
    <Content style={{ alignSelf: 'stretch' }}>
      {ingredients.map((ingredient) => (
        <Card key={ingredient.id}>
             <CardItem>
                   <Text>{ ingredient.name }</Text>
                 <Right>
                   <Button><Icon name="ios-arrow-forward" /></Button>
                 </Right>
             </CardItem>
         </Card>
      ))}

      {recipes.map((recipe) => (

        <Card key={recipe.id}>
             <CardItem>
                   <Text>{ recipe.name }</Text>
                 <Right>
                   <Button><Icon name="ios-arrow-forward" /></Button>
                 </Right>
             </CardItem>
         </Card>
      ))}
    </Content>
  </Image>
  );
};

const styles = {
  containerStyle: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  }
};

export default SearchBar;
