import { API_URL } from '../config/api';

export const postIngredient = (ingredient, token) => {
  return {
    type: 'POST_INGREDIENT',
    payload: postFetchIngredient(ingredient, token)
  };
};

function postFetchIngredient(ingredient, token) {
  let arrTags = [];
  if (ingredient.tags) {
    arrTags = ingredient.tags.split(' ');
  }
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
          tags: arrTags,
          alternatives: ingredient.alternatives,
          image_url: ingredient.photos
        })
    });
}

export const deleteIngredient = (ingredientId, token) => {
  return {
    type: 'DELETE_INGREDIENT',
    payload: deleteThisIngredient(ingredientId, token)
  };
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

export const updateIngredient = (ingredient, props) => {
  return {
    type: 'PUT_INGREDIENT',
    payload: putIngredient(ingredient, props)
  };
};

function putIngredient(ingredient, props) {
  console.log('this is edit submission object', ingredient);
  console.log('this is edit props object', props);
  if (ingredient.tags) {
    ingredient.tags.split(' ');
  }
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
      tags: ingredient.tags,
      alternatives: ingredient.alternatives,
      image_url: ingredient.photos
    })
  });
}
