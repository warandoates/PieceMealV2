import 'react-native';
import React from 'react';

import RecipeModal from '../../../src/components/Recipe/RecipeModal';
import renderer from 'react-test-renderer';

describe('tests the RecipeHeader component', () => {
  it('renders recipeHeader properly', () => {
    expect(renderer.create(
      <RecipeModal
        name={'name'}
      />
    )).toMatchSnapshot();
  });
});
