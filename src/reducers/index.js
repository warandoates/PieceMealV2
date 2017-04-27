import { combineReducers } from 'redux';
import ingredientsReducer from './ingredientsReducer';
import searchRecipeReducer from './searchRecipeReducer';

export default combineReducers({
  ingredientResults: ingredientsReducer,
  searchRecipe: searchRecipeReducer //console.log(store.getState()) ->
                                      //should return the state after this reducer is called
});
