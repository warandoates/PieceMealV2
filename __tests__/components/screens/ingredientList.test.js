import 'react-native';
import React from 'react';
import { IngredientResultsList } from '../../../src/screens/IngredientList';
import renderer from 'react-test-renderer';

describe('tests the IngredientResultsList component', () => {
  it('renders IngredientResultsList component properly', () => {
    expect(renderer.create(
      <IngredientResultsList
        isFetching={'true'}
        list={[]}
        getIngredients={jest.fn}
        navigate={jest.fn}
      />
    )).toMatchSnapshot();
  });
});
