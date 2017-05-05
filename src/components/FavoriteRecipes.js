import React, { Component } from 'react';
import { Image } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Container, Icon, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body } from 'native-base';
import space_rockets from '../assets/space_rockets.jpg';
import { getFavoriteRecipes } from '../actions/recipes';

// const cards = [
//     {
//         text: 'Card One',
//         name: 'One',
//         image: require('../assets/space_rockets.jpg'),
//     }
// ];

class FavoriteRecipes extends Component {
  render() {
        return (
            <Container>
                <View>
                    <DeckSwiper
                        dataSource={this.props.recipes}
                        renderItem={item =>
                            <Card style={{ elevation: 3 }}>
                                <CardItem>
                                    <Left>
                                        <Thumbnail source={item.image} />
                                        <Body>
                                            <Text>{item.text}</Text>
                                            <Text note>NativeBase</Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                                <CardItem cardBody>
                                    <Image style={{ resizeMode: 'cover', width: '99%' }} source={item.image} />
                                </CardItem>
                                <CardItem>
                                    <Icon name="heart" style={{ color: '#ED4A6A' }} />
                                    <Text>{item.name}</Text>
                                </CardItem>
                            </Card>
                        }
                    />
                </View>
            </Container>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getFavRecipes: () => {
      dispatch(getFavoriteRecipes());
    }
  };
};

const mapStateToProps = (state) => {
    return {
      recipes: state.clientReducer.recipes,
      isFetching: state.clientReducer.loading,
      user: state.loginReducer.user
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteRecipes);
