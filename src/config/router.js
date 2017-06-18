import { TabNavigator, StackNavigator } from 'react-navigation';
import ingredientListView from '../screens/IngredientList';
import recipeListView from '../screens/RecipeList';
import LandingPage from '../screens/LandingPage';
import ViewRecipeScreen from '../screens/ViewRecipeScreen';
import ViewIngredientScreen from '../screens/ViewIngredientScreen';

// import LogInView from '../screens/logInView';
import AddIngredientForm from '../screens/IngredientsAddForm';
import AddRecipeForm from '../screens/RecipesAddForm';
import EditIngredientForm from '../screens/IngredientEditForm';

import LoginForm from '../screens/LoginForm';
import SignupForm from '../screens/SignupForm';
import DashboardForm from '../screens/DashboardForm';

const tabOptions = {
  tabBarOptions: {
    inactiveBackgroundColor: '#F8EEE7',
    activeBackgroundColor: '#F4DECB',
    activeTintColor: '#373737'
  }
};
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
  },
}, tabOptions);

export const MainRouter = StackNavigator({
  Home: { screen: MainScreenNavigator },
  ViewRecipe: { screen: ViewRecipeScreen },
  ViewIngredient: { screen: ViewIngredientScreen },
  AddIngredient: { screen: AddIngredientForm },
  AddRecipe: { screen: AddRecipeForm },
  SignupForm: { screen: SignupForm },
  LoginForm: { screen: LoginForm },
  EditIngredient: { screen: EditIngredientForm }
}, { mode: 'modal' });
