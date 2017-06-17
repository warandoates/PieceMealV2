import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { FavoriteRecipes } from '../../../src/components/Recipe/FavoriteRecipes';

describe('tests FavoriteRecipes', () => {
  it('renders FavoriteRecipes component', () => {
  const component = shallow(
    <FavoriteRecipes
    />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
