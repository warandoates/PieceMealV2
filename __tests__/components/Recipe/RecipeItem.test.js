import 'react-native';
import React from 'react';

import RecipeItem from '../../../src/components/Recipe/RecipeItem';
import renderer from 'react-test-renderer';

describe('tests the RecipeHeader component', () => {
  it('renders recipeHeader properly', () => {
    expect(renderer.create(
      <RecipeItem
        selectRecipe={jest.fn}
        rowData={{ id: 1, name: 'name' }}
      />
    )).toMatchSnapshot();
  });
});
