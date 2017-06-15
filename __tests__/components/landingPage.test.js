import 'react-native';
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import promiseMiddleware from 'redux-promise-middleware';
import configureMockStore from 'redux-mock-store';
import rootReducer from '../../src/reducers';
import ConnectedLandingPage from '../../src/screens/LandingPage';

const middlewares = [promiseMiddleware];
const mockStore = configureMockStore(middlewares);

test('LandingPage should render', () => {
  const store = mockStore({ rootReducer });
  const landingPage = shallow(
    <ConnectedLandingPage store={store} />,
  );
  expect(shallowToJson(landingPage)).toMatchSnapShot();
});
