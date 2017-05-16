import { StackNavigator, TabNavigator } from 'react-navigation';
import DashboardForm from '../screens/DashboardForm';
import EditIngredientForm from '../screens/IngredientEditForm';
import ingredientListView from '../screens/IngredientList';
// import LogInView from '../screens/logInView';
import AddIngredientForm from '../screens/IngredientsAddForm';
import LandingPage from '../screens/LandingPage';

import LoginForm from '../screens/LoginForm';
import recipeListView from '../screens/RecipeList';
import AddRecipeForm from '../screens/RecipesAddForm';
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
	},
	Dashboard: {
		screen: DashboardForm,
	},
});

export const MainRouter = StackNavigator({
	Home: { screen: MainScreenNavigator },
	AddIngredient: { screen: AddIngredientForm },
	AddRecipe: { screen: AddRecipeForm },
	SignupForm: { screen: SignupForm },
	LoginForm: { screen: LoginForm },
	EditIngredient: { screen: EditIngredientForm },
}, { mode: 'modal' });
