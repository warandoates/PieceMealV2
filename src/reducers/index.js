import { combineReducers } from 'redux';
import ingredientsReducer from './ingredientsReducer';

export default combineReducers({
  ingredientResults: ingredientsReducer
});
