import { API_URL } from '../config/api';

export const selectRecipe = (recipeId) => {
  return { type: 'SELECT_RECIPE', payload: recipeId };
};

export const getRecipes = () => {
  return { type: 'GET_RECIPE_RESULTS', payload: fetchRecipes() };
};

export const createSearchAction = (recipe) => {
    return { type: 'SEARCH_RECIPE', payload: fetchRecipe(recipe) };
};

export const postRecipe = (recipe, token) => {
  return {
    type: 'POST_RECIPE',
    payload: postFetchRecipe(recipe, token)
  };
};

function postFetchRecipe(recipe, token) {
  fetch(`${API_URL}/api/v1/recipes`, {
    mode: 'no-cors',
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      token
    },
    body: JSON.stringify({
      name: recipe.name,
      description: recipe.description
    })
  })
  .then((res) => {
    return res.json();
  });
}

function fetchRecipes() {
  return fetch(`${API_URL}/api/v1/recipes`).then(res => res.json());
}

function fetchRecipe(query) {
    const promise1 = fetch(`${API_URL}/api/v1/search/recipes?text=${query}`, {
        method: 'get',
        headers: {
            'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTQ5MzEwNDQ5NSwiZXhwIjoxNDkzNzA5Mjk1fQ.HjinCTP_82dwGOkYxJvOnWZG9DbgdepG1OzD9UYajEU',
            'Content-Type': 'application/json'
        }
    }).then(res => res.json());
    const promise2 = fetch(`${API_URL}/api/v1/search/ingredients?text=${query}`, {
        method: 'get',
        headers: {
            'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTQ5MzEwNDQ5NSwiZXhwIjoxNDkzNzA5Mjk1fQ.HjinCTP_82dwGOkYxJvOnWZG9DbgdepG1OzD9UYajEU',
            'Content-Type': 'application/json'
        }
    }).then(res => res.json());
    const both = Promise.all([promise1, promise2]);
    return both.then(([recipesResults, ingredientsResults]) => {
        return { recipes: recipesResults.recipes, ingredients: ingredientsResults.ingredients };
    });
}
