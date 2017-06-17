import React, { Component } from 'react';
import { Image } from 'react-native';
import { H3, Badge, Content, Card, CardItem, Text, Body, Spinner } from 'native-base';
import RecipeSteps from './RecipeSteps';
import RecipeIngredient from './RecipeIngredient';
import DEFAULT_IMAGE from '../../assets/food/ice-cream.jpg';

const badgeStyle = { backgroundColor: 'black' };
const textStyle = { color: 'white' };
export default class RecipeView extends Component {

    render() {
        const recipe = this.props.recipe;
        const recipeTags = recipe.tags;
        let image;
        if (recipe.image_url) {
          image = { uri: recipe.image_url };
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
                            {recipe.name.toUpperCase()}
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
                                "{recipe.description}"
                            </Text>
                        </Body>
                    </CardItem>
                    <H3 style={{
                        fontFamily: 'Futura',
                        alignSelf: 'center'
                    }}>Instructions:</H3>
                    <CardItem>
                        {!recipe
                            ? <Spinner/>
                            : <RecipeSteps instructions={recipe.instructions}/>
                        }
                    </CardItem>
                    <H3 style={{
                        fontFamily: 'Futura',
                        alignSelf: 'center'
                    }}>Ingredients:</H3>
                    <CardItem>
                      {!recipe
                            ? <Spinner/>
                            : <RecipeIngredient ingredients={recipe.ingredients}/>
                      }
                    </CardItem>
                    <CardItem footer style={{
                        paddingBottom: 25
                    }}>
                        <Text style={{
                            fontFamily: 'Futura'
                        }} note>{recipe.notes}</Text>
                    </CardItem>
                    <CardItem footer>
                      {recipeTags.map((recipeTag) => (
                        <Badge style={badgeStyle}>
                          <Text style={textStyle}>{recipeTag}</Text>
                       </Badge>))}
                    </CardItem>
                </Card>
            </Content>
        )
    }
}
