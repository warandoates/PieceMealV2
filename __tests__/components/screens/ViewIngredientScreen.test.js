import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ViewIngredientScreen from '../../../src/screens/ViewIngredientScreen';

describe('View Ingredient Screen', () => {
  it('renders ViewIngredientScreen component', () => {
  const component = shallow(
    <ViewIngredientScreen
      navigation={{
          state: {
            params: {}
          }
        }}
    />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
