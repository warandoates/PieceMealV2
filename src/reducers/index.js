import { combineReducers } from 'redux';
import ingredientsReducer from './ingredientsReducer';
import searchRecipeReducer from './searchRecipeReducer';
import SelectionReducer from './ingredientSelectionReducer';
import loginReducer from './loginReducer';
import signupReducer from './signupReducer';

export default combineReducers({
  ingredientResults: ingredientsReducer,
  selectedIngredientId: SelectionReducer,
  searchRecipe: searchRecipeReducer,
  loginReducer,
  signupReducer

});
