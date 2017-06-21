import React, { Component } from 'react';
import { Image } from 'react-native';
import { H3, Badge, Content, Card, CardItem, Text, Body, Spinner } from 'native-base';
import RecipeInstructions from './RecipeInstructions';
import RecipeIngredients from './RecipeIngredients';
import DEFAULT_IMAGE from '../../assets/food/ice-cream.jpg';

const badgeStyle = { backgroundColor: '#68BAA7', marginRight: 10 };
const textStyle = { color: 'white', fontSize: 14, fontFamily: 'Futura' };
export default class RecipeView extends Component {

    render() {
        const recipe = this.props.recipe;
        const recipeTags = recipe.tags;
        let name = recipe.name || '';
        name = name.split(' ').map((str) => {
          return str.substring(0, 1).toUpperCase() + str.substring(1);
        }).join(' ');
        let image;
        if (recipe.image_url) {
          image = { uri: recipe.image_url };
        } else {
          image = DEFAULT_IMAGE;
        }
        return (
            <Content>
                <Card style={{ flex: 1 }} key={recipe.id}>
                    <CardItem header style={{
                        alignSelf: 'center'
                    }}>
                        <Text style={{
                            fontFamily: 'Futura',
                            fontSize: 24,
                            marginTop: 20,
                            paddingTop: 15,
                            color: '#373737'
                        }}>
                            { name }
                        </Text>
                    </CardItem>

                    <CardItem>
                        <Body>
                            <Image style={{
                                resizeMode: 'contain',
                                width: 340,
                                height: 200,
                                shadowColor: '#faebd7'
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
                  {recipe.instructions.length > 0 && <H3 style={{
                        fontFamily: 'Futura',
                        alignSelf: 'center',
                        color: '#C0B083'
                    }}>Instructions:</H3>}
                    <CardItem>
                        {!recipe
                            ? <Spinner />
                            : <RecipeInstructions instructions={recipe.instructions} />
                        }
                    </CardItem>
                    {recipe.ingredients.length > 0 && <H3 style={{
                        fontFamily: 'Futura',
                        alignSelf: 'center',
                        color: '#C0B083'
                    }}>Ingredients:</H3>}
                    <CardItem>
                      {!recipe
                            ? <Spinner/>
                            : <RecipeIngredients ingredients={recipe.ingredients}/>
                      }
                    </CardItem>
                    <CardItem footer style={{
                        paddingBottom: 25
                    }}>
                        <Text style={{
                            fontFamily: 'Futura'
                        }} note>{recipe.notes}</Text>
                    </CardItem>
                    {recipeTags.length > 0 && <H3
                      style={{
                        fontFamily: 'Futura',
                        alignSelf: 'center',
                        color: '#C0B083',
                        paddingTop: 15 }}
                    >
                      Tags:
                    </H3>}
                    <CardItem footer style={{ alignSelf: 'center', paddingBottom: 30 }}>
                      {recipeTags.map((recipeTag) => (
                        <Badge key={recipeTag} style={badgeStyle}>
                          <Text style={textStyle}>{recipeTag}</Text>
                       </Badge>))}
                    </CardItem>
                </Card>
            </Content>
        )
    }
}
