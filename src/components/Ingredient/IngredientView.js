import React, { Component } from 'react';
import { Image } from 'react-native';
import { H3, Badge, Content, Card, CardItem, Text, Body, Spinner } from 'native-base';
import DEFAULT_IMAGE from '../../assets/food/ice-cream.jpg';

const badgeStyle = { backgroundColor: 'black', marginRight: 5 };
const textStyle = { color: 'white' };
export default class IngredientView extends Component {

    render() {
      const ingredient = this.props.ingredient;
      const ingredientTags = ingredient.tags;
      let image;
      if (ingredient.image_url) {
        image = { uri: ingredient.image_url };
      } else {
        image = DEFAULT_IMAGE;
      }
        return (
            <Content>
                <Card style={{
                    flex: 1
                }}>
                    <CardItem header style={{
                        alignSelf: 'center'
                    }}>
                        <Text style={{
                            fontFamily: 'Futura',
                            fontSize: 24,
                            marginTop: 20,
                            paddingTop: 15
                        }}>
                            {ingredient.name.toUpperCase()}
                        </Text>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Image style={{
                                resizeMode: 'contain',
                                width: 340,
                                height: 200
                            }} source={image}/>
                            <Text note style={{
                                fontFamily: 'Futura',
                                marginLeft: 20,
                                marginRight: 15,
                                marginTop: 15,
                                marginBottom: 10,
                                alignSelf: 'center'
                            }}>
                                "{ingredient.description}"
                            </Text>
                        </Body>
                    </CardItem>
                    <CardItem footer>
                      {ingredientTags.map((ingredientTag) => (
                        <Badge key={ingredientTags.indexOf(ingredientTag)} style={badgeStyle}>
                            <Text style={textStyle}>{ingredientTag}</Text>
                        </Badge>))}
                    </CardItem>
                </Card>
            </Content>
        )
    }
}
