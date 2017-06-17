import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { PieChart } from '../../../src/components/Charts/Pie';

describe('tests PieChart', () => {
  it('renders PieChart component', () => {
  const component = shallow(
    <PieChart
      fetchIngredientData={jest.fn}
      data={[]}
    />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
