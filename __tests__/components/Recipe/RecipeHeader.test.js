import 'react-native';
import React from 'react';

import RecipeHeader from '../../../src/components/Recipe/RecipeHeader';
import renderer from 'react-test-renderer';

describe('tests the RecipeHeader component', () => {
  it('renders recipeHeader properly', () => {
    expect(renderer.create(
      <RecipeHeader
        navigate={jest.fn}
      />
    )).toMatchSnapshot();
  });
});
