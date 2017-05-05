import { API_URL } from '../config/api';

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
