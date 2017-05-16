import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import chartsReducer from './chartsReducer';
import clientReducer from './clientReducer';
import SelectionReducer from './ingredientSelectionReducer';
import ingredientsReducer from './ingredientsReducer';
import loginReducer from './loginReducer';
import RecipeSelectionReducer from './RecipeSelectionReducer';
import GetRecipeResults from './RecipesReducer';
import searchRecipeReducer from './searchRecipeReducer';
import signupReducer from './signupReducer';

//So I think naming convention of your reducers is very important. I would honestly recommend not naming
//your reducers ingredientsReducer. I would just name it Ingredients because that's all that your other
//components care about. When you're trying to grab your ingredients your componenent doesn't care about
//the fact that it's a reducer it just wants the ingredients data so name it as such.
//Combine reducers is the root of all your data. Think about not what is affecting each reducer when
//you name them but what information you want that key:value pair to contain.
// Ex:

//export default combineReducers({
//form,
//ingredients,
//	selectedIngredientId,
//	searchRecipe,
//	selectedRecipeId,
//	recipeResults,
//	login,
//	signup,
//	client,
//	charts,
//});

//Remember that your exporting anonymous functions. You can name them whatever you want.
//Ex: No Name so you can export it as whatever you want ingredientsReducer can just be ingredients.
//export default (state = null, action) => {
//	switch (action.type) {
//		case 'SELECT_INGREDIENT':
//			return action.payload;
//		default:
//			return state;
//	}
//};

//One thing I strongly encourage is to have an initialState file that contains every piece of your state.
//This way it is very easy to see the entire structure of your store. Helps a lot when you're dealing with
//tons of different pieces of state.

export default combineReducers({
	form: formReducer,
	ingredientResults: ingredientsReducer,
	selectedIngredientId: SelectionReducer,
	searchRecipe: searchRecipeReducer,
	selectedRecipeId: RecipeSelectionReducer,
	recipeResults: GetRecipeResults,
	loginReducer,
	signupReducer,
	clientReducer,
	chartsReducer,
});
