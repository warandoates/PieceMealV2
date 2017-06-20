import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { RecipeResultsList } from '../../../src/screens/RecipeList';

describe('Recipe List', () => {
  it('renders RecipeResultsList component', () => {
  const component = shallow(
    <RecipeResultsList
      list={[]}
      isFetching={true}
      navigate={jest.fn}
      getAllRecipes={jest.fn}
    />);
    expect(toJson(component)).toMatchSnapshot();
  });


});
