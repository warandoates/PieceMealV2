import 'react-native';
import React from 'react';
import Fab from '../../../src/components/Recipe/Fab';

import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

describe('fab component', () => {
  it('renders fab button properly', () => {
    expect(renderer.create(
      <Fab
        onClose={jest.fn}
      />
    )).toMatchSnapshot();
  });
});
