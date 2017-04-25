import React from 'react';
import { TabNavigator } from 'react-navigation';

import settings from '../screens/Settings';
import LandingPage from '../screens/LandingPage';

export const Tabs = TabNavigator({
  home: {
    screen: LandingPage,
  },
  settings: {
    screen: settings,
  },
});
