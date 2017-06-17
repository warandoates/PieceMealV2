import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ViewRecipeScreen from '../../../src/screens/ViewRecipeScreen';

describe('View Recipe Screen', () => {
  it('renders ViewRecipeScreen component', () => {
  const component = shallow(
    <ViewRecipeScreen
      navigation={{
          state: {
            params: {}
          }
        }}
    />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
