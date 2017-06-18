import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import ingredients from './ingredientsReducer';
import searchRecipeReducer from './searchRecipeReducer';
import SelectionReducer from './ingredientSelectionReducer';
import loginReducer from './loginReducer';
import signupReducer from './signupReducer';
import clientReducer from './clientReducer';
import chartsReducer from './chartsReducer';
import RecipeSelectionReducer from './RecipeSelectionReducer';
import GetRecipeResults from './RecipesReducer';
import newRecipeReducer from './newRecipeReducer';

const r = combineReducers({
  form: formReducer,
  ingredients,
  selectedIngredientId: SelectionReducer,
  searchRecipe: searchRecipeReducer,
  selectedRecipeId: RecipeSelectionReducer,
  recipeResults: GetRecipeResults,
  newRecipeReducer,
  loginReducer,
  signupReducer,
  clientReducer,
  chartsReducer
});

export default (state, action) => {
  if (action.type.endsWith('_REJECTED')) {
    console.log('rejected action!', action);
  }
  const newState = r(state, action);
  console.log("new state", newState);
  return newState;
};
