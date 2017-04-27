//Search Bar
import React from 'react';
import {
    Content,
    Card,
    CardItem,
    Text,
    Icon,
    Right,
    Button
} from 'native-base';

const searchBar = ({ ingredients }) => (
    <Content>
      {ingredients.map((ingredient) => (
        <Card>
             <CardItem>
                   <Text>{ingredient.name}</Text>
                 <Right>
                   <Button><Icon name="ios-arrow-forward" /></Button>
                 </Right>
             </CardItem>
         </Card>
      ))}
    </Content>
);

export default searchBar;
