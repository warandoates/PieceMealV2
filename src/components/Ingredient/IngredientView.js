import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { connect } from 'react-redux';
import Toast from 'react-native-simple-toast';
import { Badge, Content, Card, CardItem, Text, Body, Button } from 'native-base';
import { deleteIngredient } from '../../actions';
import DEFAULT_IMAGE from '../../assets/food/ice-cream.jpg';

export class IngredientView extends Component {

    navigateButton = (text) => {
      return (
        <Button
            style={styles.buttonStyle}
            small
            warning
            onPress={() => {
             this.props.navigation.navigate('EditIngredient', this.props.ingredient);
         }}
        >
          <Text style={styles.textStyle}>{text}</Text>
        </Button>
      );
    }

    render() {
      console.log(this.props.ingredient);
      const { ingredient, user } = this.props;
      const ingredientTags = ingredient.tags;
      const ingredientAlts = ingredient.alternatives;
      let alternativeNames = [];
      let name = ingredient.name || '';
      let image;

      alternativeNames = ingredientAlts.map((ingredientAlt) => {
        return ingredientAlt.name;
      });

      name = name.split(' ').map((str) => {
        return str.substring(0, 1).toUpperCase() + str.substring(1);
        }).join(' ');

      if (ingredient.image_url) {
        image = { uri: ingredient.image_url };
      } else {
        image = DEFAULT_IMAGE;
      }
        return (
            <Content>
                <Card style={{ flex: 1 }}>
                  <CardItem
                    header
                    style={{ alignSelf: 'center' }}
                  >
                    <Text style={styles.headerStyle}>{name}</Text>
                  </CardItem>
                  <CardItem>
                    <Body>
                      <Image style={styles.imageStyle} source={image} />
                        <Text
                          note
                          style={{
                            fontFamily: 'Futura',
                            marginLeft: 20,
                            marginRight: 15,
                            marginTop: 15,
                            marginBottom: 10,
                            alignSelf: 'center'
                          }}
                        >
                          {ingredient.description}
                        </Text>
                    </Body>
                  </CardItem>
                  {alternativeNames.length > 0 && <Text style={{ marginLeft: 15 }}>Alternatives:</Text>}
                  <CardItem>
                    {alternativeNames.map((alternative) => (
                      <Button small rounded style={{ backgroundColor: '#68BAA7', marginRight: 10 }}>
                        <Text style={styles.textStyle}>{alternative}</Text>
                      </Button>
                    ))}
                  </CardItem>
                  {ingredientTags.length > 0 && <Text style={{ marginTop: 5, marginLeft: 15 }}>Tags: </Text>}
                  <CardItem>
                      {/* <View style={styles.viewStyle}> */}

                      {ingredientTags.map((ingredientTag) => (
                        <Badge key={ingredientTags.indexOf(ingredientTag)} style={{ backgroundColor: '#556270', marginRight: 10 }}>
                            <Text style={styles.textStyle}>{ingredientTag}</Text>
                        </Badge>))}
                      {/* </View> */}
                    </CardItem>
                    <CardItem style={{ marginBottom: 30, marginTop: 30 }} footer>
                      {this.props.user && this.navigateButton('Edit')}
                      {this.props.user &&
                        <Button
                        style={styles.buttonStyle}
                        danger
                        small
                        onPress={() => {
                         this.props.deleteIngredient(ingredient.id, user.token)
                           .then(res => {
                             if (res.value.status !== 204) {
                               return Toast.show('Bad Request');
                             }
                             return Toast.show('Item Deleted!');
                           })
                           .then(() => {
                             return this.props.navigation.navigate('ingredients');
                           });
                         }}
                        >
                          <Text style={styles.textStyle}>Delete</Text>
                      </Button>}
                    </CardItem>
                </Card>
            </Content>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      // list: state.ingredients.ingredients,
      // isFetching: state.ingredients.isFetching,
      user: state.loginReducer.user
    };
};

export default connect(mapStateToProps, { deleteIngredient })(IngredientView);

const styles = {
  badgeStyle: {
    backgroundColor: 'black',
    // marginRight: 5,
    // flex: 1,
    // flexDirection: 'row',
    // alignItems: 'flex-start',
    // justifyContent: 'center',
    // width: -5
  },
  textStyle: {
    color: 'white',
    textAlign: 'center'
  },
  imageStyle: {
    resizeMode: 'contain',
    width: 340,
    height: 200
  },
  headerStyle: {
    fontFamily: 'Futura',
    fontSize: 24,
    marginTop: 20,
    paddingTop: 15
  },
  buttonStyle: {
    flex: 1,
    marginRight: 5,
    marginLeft: 5,
    alignSelf: 'center',
  },
  viewStyle: {
    flexDirection: 'row',
    height: 80,
    padding: 20,
    marginTop: 0,
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    alignItems: 'stretch',
    flex: 2
  }
};
