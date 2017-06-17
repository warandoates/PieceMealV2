import 'react-native';
import React from 'react';
import { GetRecipeButton } from '../../../src/components/Recipe/GetRecipeButton';
import renderer from 'react-test-renderer';

describe('tests the RecipeHeader component', () => {
  it('renders recipeHeader properly', () => {
    expect(renderer.create(
      <GetRecipeButton
        getAllRecipes={jest.fn}
      />
    )).toMatchSnapshot();
  });
});
