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
        const rowData = this.props.recipe;
        let image;
        if (rowData.image_url) {
          image = { uri: rowData.image_url };
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
                            {this.props.recipe.name.toUpperCase()}
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
                                "{this.props.recipe.description}"
                            </Text>
                        </Body>
                    </CardItem>
                    <H3 style={{
                        fontFamily: 'Futura',
                        alignSelf: 'center'
                    }}>Instructions:</H3>
                    <CardItem>
                        {!this.props.recipe
                            ? <Spinner/>
                            : <RecipeSteps instructions={this.props.recipe.instructions}/>
                        }
                    </CardItem>
                    <H3 style={{
                        fontFamily: 'Futura',
                        alignSelf: 'center'
                    }}>Ingredients:</H3>
                    <CardItem>
                      {!this.props.recipe
                            ? <Spinner/>
                            : <RecipeIngredient ingredients={this.props.recipe.ingredients}/>
                      }
                    </CardItem>
                    <CardItem footer style={{
                        paddingBottom: 25
                    }}>
                        <Text style={{
                            fontFamily: 'Futura'
                        }} note>{this.props.recipe.notes}</Text>
                    </CardItem>
                    <CardItem footer>
                        <Badge style={badgeStyle}>
                            <Text style={textStyle}>vegetarian</Text>
                        </Badge>
                        <Badge style={badgeStyle}>
                            <Text style={textStyle}>vegan</Text>
                        </Badge>
                        <Badge style={badgeStyle}>
                            <Text style={textStyle}>dairy</Text>
                        </Badge>
                    </CardItem>
                </Card>
            </Content>
        )
    }
}
