import { combineReducers } from 'redux';
import ingredientsReducer from './ingredientsReducer';
import searchRecipeReducer from './searchRecipeReducer';
import SelectionReducer from './ingredientSelectionReducer';

export default combineReducers({
  ingredientResults: ingredientsReducer,
  selectedIngredientId: SelectionReducer,
  searchRecipe: searchRecipeReducer
});
