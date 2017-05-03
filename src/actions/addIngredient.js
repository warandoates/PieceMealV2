
export const postIngredient = (ingredient, token) => {
  return {
    type: 'POST_INGREDIENT',
    payload: postFetchIngredient(ingredient, token)
  };
};

function postFetchIngredient(ingredient, token) {
  return fetch('https://piecemeal-api.herokuapp.com/api/v1/ingredients', {
        mode: 'no-cors',
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          token
        },
        body: JSON.stringify({
          name: ingredient.name,
          description: ingredient.description,
          tags: ingredient.tags.split(' '),
          alternatives: ingredient.alternatives,
          image_url: ingredient.photos
        })
    })
    .then(res => res.json());
}

export const deleteIngredient = (ingredientId, token) => {
  return {
    type: 'DELETE_INGREDIENT',
    payload: deleteThisIngredient(ingredientId, token)
  };
};

function deleteThisIngredient(ingredientId, token) {
  return fetch(`https://piecemeal-api.herokuapp.com/api/v1/ingredients/${ingredientId}`, {
    mode: 'no-cors',
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      token
    }
  })
  .then(res => res.json());
}
