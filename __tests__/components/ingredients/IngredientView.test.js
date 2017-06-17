import 'react-native';
import React from 'react';
import IngredientView from '../../../src/components/Ingredient/IngredientsHeader';
import renderer from 'react-test-renderer';

describe('tests the IngredientView component', () => {
  it('renders IngredientView component properly', () => {
    expect(renderer.create(
      <IngredientView
        ingredient={{
          name: 'name',
          ingredient: 'ingredient',
          description: 'description'
        }}
      />
    )).toMatchSnapshot();
  });
});
