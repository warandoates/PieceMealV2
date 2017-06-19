import React, { Component } from 'react';
import { Image } from 'react-native';
import { H3, Badge, Content, Card, CardItem, Text, Body, Spinner } from 'native-base';
import DEFAULT_IMAGE from '../../assets/food/ice-cream.jpg';

const badgeStyle = { backgroundColor: '#68BAA7' };
const textStyle = { color: 'white' };
export default class IngredientView extends Component {

    render() {
      const ingredient = this.props.ingredient;
      const ingredientTags = ingredient.tags;
      let name = ingredient.name || '';
      name = name.split(' ').map((str) => {
        return str.substring(0, 1).toUpperCase() + str.substring(1);
      }).join(' ');
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
                            { name }
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
                        <Badge style={badgeStyle}>
                            <Text style={textStyle}>{ingredientTag}</Text>
                        </Badge>))}
                    </CardItem>
                </Card>
            </Content>
        )
    }
}
