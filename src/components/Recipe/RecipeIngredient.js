import React, { Component } from 'react';
import { Content, View, Card, CardItem, Text } from 'native-base';

export default class RecipeIngredient extends Component {
  render() {
    return (
        <Content>
          <View>
            { this.props.ingredients.map((ingredient) => (
              <Card transparent key={ingredient.id}>
                <CardItem>
                  <Text
                    style={{ fontStyle: 'italic', alignSelf: 'center', flex: 3 }}
                  >
                      { ingredient.amount } { ingredient.name }
                  </Text>
                </CardItem>
              </Card>
            )) }
          </View>
        </Content>
    );
  }
}
