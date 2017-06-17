import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import RecipeSteps from '../../../src/components/Recipe/RecipeSteps';

describe('tests RecipeSteps', () => {
  it('renders RecipeSteps component', () => {
  const component = shallow(
    <RecipeSteps
      instructions={[]}
    />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
