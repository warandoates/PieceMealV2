import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { RadarChart } from '../../../src/components/Charts/Radar';

describe('tests RadarChart', () => {
  it('renders RadarChart component', () => {
  const component = shallow(
    <RadarChart
    />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
