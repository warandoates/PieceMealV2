import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { BarChart } from '../../../src/components/Charts/Bar';

describe('tests BarChart', () => {
  it('renders BarChart component', () => {
  const component = shallow(
    <BarChart
      navigation={{
          state: {
            params: {}
          }
        }}
    />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
