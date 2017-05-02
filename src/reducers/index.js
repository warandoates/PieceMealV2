import { combineReducers } from 'redux';
import ingredientsReducer from './ingredientsReducer';
import searchRecipeReducer from './searchRecipeReducer';
import SelectionReducer from './ingredientSelectionReducer';
import loginReducer from './loginReducer';
import signupReducer from './signupReducer';
import clientReducer from './clientReducer';
import RecipeSelectionReducer from './RecipeSelectionReducer';
import GetRecipeResults from './RecipesReducer';

export default combineReducers({
  ingredientResults: ingredientsReducer,
  selectedIngredientId: SelectionReducer,
  searchRecipe: searchRecipeReducer,
  selectedRecipeId: RecipeSelectionReducer,
  recipeResults: GetRecipeResults,
  loginReducer,
  signupReducer,
  clientReducer
});
