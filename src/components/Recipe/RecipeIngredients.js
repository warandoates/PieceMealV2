import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Content, View, Card, CardItem, Text } from 'native-base';

class RecipeIngredients extends Component {

  isRestricted(ingredientId) {
    return this.props.restrictions.some((restriction) => {
      return (ingredientId === restriction.id);
    })
  }

  render() {
    return (
        <Content>
          <View>
            { this.props.ingredients.map((ingredient) => {
              const style = { fontStyle: 'normal',
                              alignSelf: 'center',
                              flex: 3,
                              fontFamily: 'Futura',
                              fontSize: 14,
                              color: '#373737'
                            };
              const altStyle = { fontStyle: 'italic',
                                 alignSelf: 'center',
                                 fontFamily: 'Futura',
                                 flex: 3,
                                 color: 'grey' };
              let alternativeNames = [];
              if (this.isRestricted(ingredient.id)) {
                style.color = 'red';
                alternativeNames = ingredient.alternatives.map((alternative) => {
                  return alternative.name;
                });
              }

              return (
              <Card transparent key={ingredient.id}>
                <CardItem>
                  <Text style={style}>
                      { ingredient.amount } { ingredient.name }
                  </Text>
                </CardItem>
                  { alternativeNames.length > 0 &&
                    <CardItem>
                      <Text style={altStyle}>
                        { 'use ' + alternativeNames.join(', ') + ' instead!' }
                      </Text>
                    </CardItem>
                  }
              </Card>
              );
            })}
          </View>
        </Content>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    restrictions: state.clientReducer.client.restrictions,
  };
};

export default connect(mapStateToProps)(RecipeIngredients);
