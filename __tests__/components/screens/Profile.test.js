import 'react-native';
import React from 'react';
import { Profile } from '../../../src/components/Profile';
import renderer from 'react-test-renderer';

describe('tests the Profile component', () => {
  it('renders Profile component properly', () => {
    expect(renderer.create(
      <Profile
        changeRestrictions={jest.fn}
        userChange={jest.fn}
        restrictions={'restrictions'}
      />
    )).toMatchSnapshot();
  });
});
