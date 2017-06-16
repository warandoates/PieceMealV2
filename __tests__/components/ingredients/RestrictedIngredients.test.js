import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import RestrictedIngredients from '../../src/components/Ingredient/RestrictedIngredients';
import renderer from 'react-test-renderer';

jest.mock('ListView', () => {
  return require('react').createClass({
    statics: {
      DataSource: require.requireActual('ListView').DataSource,
    },
    render() {
      return require('react').createElement('ListView', this.props, this.props.children);
    }
  });
});

// jest.mock('ListView', () => 'ListView');
// const something = require.requireActual('ListView').DataSource;
// console.log(something);
describe('<MyComponent />', () => {
  it('should render stuff', () => {
    const wrapper = renderer.create(<RestrictedIngredients />).toJSON();
    expect(wrapper).toMatchSnapshot();
  //   expect(wrapper.length).to.equal(1);
  //   expect(wrapper.contains(<Text>I wonder if there will be any problems...</Text>)).to.equal(false);
  });
});
