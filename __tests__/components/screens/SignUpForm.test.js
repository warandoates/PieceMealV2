import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import renderer from 'react-test-renderer';
import { SignupForm } from '../../../src/screens/SignupForm';

describe('Sign Up form', () => {
  it('renders SignUpForm component', () => {
  const component = shallow(
    <SignupForm
      firstNameChange={jest.fn}
      lastNameChange={jest.fn}
      emailChange={jest.fn}
      passwordChange={jest.fn}
      confirmChange={jest.fn}
      signupUser={jest.fn}
      firstName={'firstName'}
      lastName={'lastName'}
      email={'email'}
      password={'password'}
      confirm={'confirm'}
      passwordMatch={true}
    />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
