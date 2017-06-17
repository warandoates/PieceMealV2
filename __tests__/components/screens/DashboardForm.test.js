import 'react-native';
import React from 'react';
import DashboardForm from '../../../src/screens/DashboardForm';
import renderer from 'react-test-renderer';

describe('tests the DashboardForm component', () => {
  it('renders DashboardForm component properly', () => {
    expect(renderer.create(
      <DashboardForm
        store={'store'}
      />
    )).toMatchSnapshot();
  });
});
