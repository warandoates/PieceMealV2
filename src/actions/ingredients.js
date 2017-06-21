import { API_URL } from '../config/api';

export const fetchIngredients = () => {
   return fetch(`${API_URL}/api/v1/ingredients`).then(res => res.json());
};

export const postIngredient = (ingredient, token) => {
  return {
    type: 'POST_INGREDIENT',
    payload: postFetchIngredient(ingredient, token)
  };
};

export const deleteIngredient = (ingredientId, token) => {
  return {
    type: 'DELETE_INGREDIENT',
    payload: deleteThisIngredient(ingredientId, token)
  };
};

export const updateIngredient = (ingredient, props) => {
  return {
    type: 'PUT_INGREDIENT',
    payload: putIngredient(ingredient, props)
  };
};

export const selectIngredient = (ingredientId) => {
    return { type: 'SELECT_INGREDIENT', payload: ingredientId };
};

export const getIngredients = () => {
    return { type: 'GET_INGREDIENT_RESULTS', payload: fetchIngredients() };
};

export const putIngredient = (ingredient, props) => {
  return fetch(`${API_URL}/api/v1/ingredients/${props.navigation.state.params.id}`, {
    mode: 'no-cors',
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      token: props.token
    },
    body: JSON.stringify({
      name: ingredient.name,
      description: ingredient.description,
      tags: ingredient.tags.split(' ') || [],
      alternatives: [{}],
      image_url: ingredient.image_url
    })
  });
};

function deleteThisIngredient(ingredientId, token) {
  return fetch(`${API_URL}/api/v1/ingredients/${ingredientId}`, {
    mode: 'no-cors',
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      token
    }
  });
}

function postFetchIngredient(ingredient, token) {
  return fetch(`${API_URL}/api/v1/ingredients`, {
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
          tags: ingredient.tags.split(' ') || [''],
          alternatives: [{ alt_ingredient_id: 42, ratio: '' }],
          image_url: ingredient.image_url || ''
        })
    });
}
