import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import RestrictedIngredients from '../../../src/components/Ingredient/RestrictedIngredients';

describe('Resricted Ingredients', () => {
  it('renders RestrictedIngredients component', () => {
  const component = shallow(
    <RestrictedIngredients
      list={[]}
    />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
