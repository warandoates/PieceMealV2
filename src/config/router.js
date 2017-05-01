import React from 'react';
import { TabNavigator } from 'react-navigation';

import ingredientListView from '../screens/IngredientList';
import LandingPage from '../screens/LandingPage';
import LoginForm from '../screens/LoginForm';
import SignupForm from '../screens/SignupForm';
import DashboardForm from '../screens/DashboardForm';

export const Tabs = TabNavigator({
  home: {
    screen: LandingPage,
  },
  ingredients: {
    screen: ingredientListView,
  },
  logIn: {
    screen: LoginForm,
  },
  signup: {
    screen: SignupForm,
  },
  dashboard: {
    screen: DashboardForm,
  }
});
