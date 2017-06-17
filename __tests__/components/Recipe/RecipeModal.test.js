import 'react-native';
import React from 'react';

import RecipeModal from '../../../src/components/Recipe/RecipeModal';
import renderer from 'react-test-renderer';

describe('tests the RecipeModal component', () => {
  it('renders RecipeModal properly', () => {
    expect(renderer.create(
      <RecipeModal
        name={'name'}
        recipe={{ name: 'name' }}
      />
    )).toMatchSnapshot();
  });
});
