import { combineReducers } from 'redux';
import ingredientsReducer from './ingredientsReducer';
import searchRecipeReducer from './searchRecipeReducer';
import SelectionReducer from './ingredientSelectionReducer';

export default combineReducers({
  ingredientResults: ingredientsReducer,
  searchRecipe: searchRecipeReducer, //console.log(store.getState()) ->
  selectedIngredientId: SelectionReducer
});
