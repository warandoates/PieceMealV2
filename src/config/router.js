import { TabNavigator, StackNavigator } from 'react-navigation';
import ingredientListView from '../screens/IngredientList';
import recipeListView from '../screens/RecipeList';
import LandingPage from '../screens/LandingPage';

// import LogInView from '../screens/logInView';
import AddIngredientForm from '../screens/IngredientsAddForm';

import LoginForm from '../screens/LoginForm';
import SignupForm from '../screens/SignupForm';


const MainScreenNavigator = TabNavigator({
  home: {
    screen: LandingPage,
  },
  ingredients: {
    screen: ingredientListView,
  },
  recipes: {
    screen: recipeListView,
  },
  logIn: {
    screen: LoginForm,
  },
  signup: {
    screen: SignupForm,
  }
});

export const MainRouter = StackNavigator({
  Home: { screen: MainScreenNavigator },
  AddIngredient: { screen: AddIngredientForm }
}, { mode: 'modal' });
