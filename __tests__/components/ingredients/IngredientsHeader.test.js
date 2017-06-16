import 'react-native';
import React from 'react';
import IngredientHeader from '../../../src/components/Ingredient/IngredientsHeader';
import renderer from 'react-test-renderer';

describe('tests the IngredientHeader component', () => {
  it('renders IngredientHeader component properly', () => {
    expect(renderer.create(
      <IngredientHeader
        navigate={jest.fn}
      />
    )).toMatchSnapshot();
  });
});
