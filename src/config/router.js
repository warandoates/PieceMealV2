import React from 'react';
import { TabNavigator } from 'react-navigation';

import ingredientListView from '../screens/IngredientList';
import LandingPage from '../screens/LandingPage';

export const Tabs = TabNavigator({
  home: {
    screen: LandingPage,
  },
  ingredients: {
    screen: ingredientListView,
  },
});
