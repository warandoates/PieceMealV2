import { TabNavigator, StackNavigator } from 'react-navigation';
import ingredientListView from '../screens/IngredientList';
import recipeListView from '../screens/RecipeList';
import LandingPage from '../screens/LandingPage';

// import LogInView from '../screens/logInView';
import AddIngredientForm from '../screens/IngredientsAddForm';
import AddRecipeForm from '../screens/RecipesAddForm';

import LoginForm from '../screens/LoginForm';
import SignupForm from '../screens/SignupForm';
import DashboardForm from '../screens/DashboardForm';


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
  },
  Dashboard: {
    screen: DashboardForm,
  }
});

export const MainRouter = StackNavigator({
  Home: { screen: MainScreenNavigator },
  AddIngredient: { screen: AddIngredientForm },
  AddRecipe: { screen: AddRecipeForm },
  SignupForm: { screen: SignupForm },
  LoginForm: { screen: LoginForm }
}, { mode: 'modal' });
