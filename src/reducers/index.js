import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import ingredientsReducer from './ingredientsReducer';
import searchRecipeReducer from './searchRecipeReducer';
import SelectionReducer from './ingredientSelectionReducer';
import loginReducer from './loginReducer';
import signupReducer from './signupReducer';
import RecipeSelectionReducer from './RecipeSelectionReducer';
import GetRecipeResults from './RecipesReducer';


export default combineReducers({
  form: formReducer,
  ingredientResults: ingredientsReducer,
  selectedIngredientId: SelectionReducer,
  searchRecipe: searchRecipeReducer,
  selectedRecipeId: RecipeSelectionReducer,
  recipeResults: GetRecipeResults,
  loginReducer,
  signupReducer

});
