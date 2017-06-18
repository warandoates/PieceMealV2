import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { DashboardForm } from '../../src/components/Charts';

describe('tests DashboardForm', () => {
  it('renders DashboardForm component', () => {
  const component = shallow(
    <DashboardForm
    />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
