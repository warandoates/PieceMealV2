import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Content, View, Card, CardItem, Text } from 'native-base';

class RecipeIngredients extends Component {

  isRestricted(ingredientId) {
    return this.props.restrictions.some((restriction) => {
      return (ingredientId === restriction.id);
    });
  }

  render() {
    return (
        <Content>
          <View>
            { this.props.ingredients.map((ingredient) => {
              const style = { fontStyle: 'normal',
                              alignSelf: 'center',
                              color: '#373737',
                              fontFamily: 'Futura',
                              fontSize: 14
                            };
              const altStyle = { fontStyle: 'italic',
                                 fontFamily: 'Futura',
                                 color: 'grey'
                               };
              const amountStyle = {
                                    fontStyle: 'italic',
                                    fontFamily: 'Futura',
                                    fontSize: 14,
                                    color: '#68BAA7'
                                  };
              let alternativeNames = [];
              if (this.isRestricted(ingredient.id)) {
                style.color = '#AF473C';
                alternativeNames = ingredient.alternatives.map((alternative) => {
                  return alternative.name;
                });
              }

              return (
              <Card transparent key={ingredient.id}>
                <CardItem >
                  <Text style={amountStyle}> { ingredient.amount } </Text>
                  <Text style={style}> { ingredient.name } </Text>
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
