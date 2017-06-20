import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import RecipeView from '../../../src/components/Recipe/RecipeView';

describe('tests RecipeView', () => {
  it('renders RecipeView component', () => {
  const component = shallow(
    <RecipeView
      recipe={{
        name: 'name',
        image: {},
        description: 'description',
        instructions: 'instructions',
        notes: 'notes',
        tags: []
      }}
    />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
