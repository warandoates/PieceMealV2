import 'react-native';
import React from 'react';
import { GetIngredientsButton } from '../../../src/components/Ingredient/GetIngredientButton';
import renderer from 'react-test-renderer';

describe('tests the GetIngredientsButton component', () => {
  it('renders getIngredients component properly', () => {
    expect(renderer.create(
      <GetIngredientsButton
        getIngredients={jest.fn}
      />
    )).toMatchSnapshot();
  });
});
