import 'react-native';
import React from 'react';
import IngredientItem from '../../../src/components/Ingredient/IngredientItem';
import renderer from 'react-test-renderer';

describe('tests the IngredientItem component', () => {
  it('renders IngredientItem component properly', () => {
    expect(renderer.create(
      <IngredientItem
        rowData={{id: 1}}
      />
    )).toMatchSnapshot();
  });
});
