import { combineReducers } from 'redux';
import ingredientsReducer from './ingredientsReducer';
import searchRecipeReducer from './searchRecipeReducer';

export default combineReducers({
  ingredientResults: ingredientsReducer,
  searchRecipe: searchRecipeReducer
});
