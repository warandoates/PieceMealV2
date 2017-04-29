import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';

import ingredientListView from '../screens/IngredientList';
import LandingPage from '../screens/LandingPage';
import LogInView from '../screens/logInView';
import AddIngredientForm from '../screens/IngredientsAddForm';

const MainScreenNavigator = TabNavigator({
  home: {
    screen: LandingPage,
  },
  ingredients: {
    screen: ingredientListView,
  },
  logIn: {
    screen: LogInView,
  }
});

export const MainRouter = StackNavigator({
  Home: { screen: MainScreenNavigator },
  AddIngredient: { screen: AddIngredientForm }
}, { mode: 'modal' });
