import { API_URL } from '../config/api';

// SearchResults  ============================================================= //
export const createSearchAction = (recipe) => ({ type: 'SEARCH_RECIPE', payload: fetchRecipe(recipe) });

function fetchRecipe(query) {
    const promise1 = fetch(`${API_URL}/api/v1/search/recipes?text=${query}`, {
        method: 'get',
        headers: {
            token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTQ5MzEwNDQ5NSwiZXhwIjoxNDkzNzA5Mjk1fQ.HjinCTP_82dwGOkYxJvOnWZG9DbgdepG1OzD9UYajEU',
            'Content-Type': 'application/json'
        }
    }).then(res => res.json());
    const promise2 = fetch(`${API_URL}/api/v1/search/ingredients?text=${query}`, {
        method: 'get',
        headers: {
            token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTQ5MzEwNDQ5NSwiZXhwIjoxNDkzNzA5Mjk1fQ.HjinCTP_82dwGOkYxJvOnWZG9DbgdepG1OzD9UYajEU',
            'Content-Type': 'application/json'
        }
    }).then(res => res.json());
    const both = Promise.all([promise1, promise2]);
    return both.then(([recipesResults, ingredientsResults]) => ({ recipes: recipesResults.recipes, ingredients: ingredientsResults.ingredients }));
}

// Recipes  ============================================================= //
export const selectRecipe = (recipeId) => ({ type: 'SELECT_RECIPE', payload: recipeId });

export const getRecipes = () => ({ type: 'GET_RECIPE_RESULTS', payload: fetchRecipes() });

function fetchRecipes() {
  return fetch(`${API_URL}/api/v1/recipes`).then(res => res.json());
}

// Ingredients  ============================================================= //
export const selectIngredient = (ingredientId) => ({ type: 'SELECT_INGREDIENT', payload: ingredientId });

export const getIngredients = () => ({ type: 'GET_INGREDIENT_RESULTS', payload: fetchIngredients() });

function fetchIngredients() {
    return fetch(`${API_URL}/api/v1/ingredients`).then(res => res.json());
}
