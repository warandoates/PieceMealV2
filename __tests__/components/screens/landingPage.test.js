import 'react-native';
import React from 'react';
import { LandingPage } from '../../../src/screens/LandingPage';
import renderer from 'react-test-renderer';

describe('tests the LandingPage component', () => {
  it('renders LandingPage component properly', () => {
    expect(renderer.create(
      <LandingPage
        searchRecipe={jest.fn}
        navigation={'navigation'}
        ingredients={[]}
        recipes={[]}
      />
    )).toMatchSnapshot();
  });
});
