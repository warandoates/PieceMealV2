import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { TreeChart } from '../../../src/components/Charts/Tree';

describe('tests TreeChart', () => {
  it('renders TreeChart component', () => {
  const component = shallow(
    <TreeChart
    />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
