
export const postIngredient = (ingredient, token) => {
  return {
    type: 'POST_INGREDIENT',
    payload: postFetchIngredient(ingredient, token)
  };
};

function postFetchIngredient(ingredient, token) {
  fetch(`https://piecemeal-api.herokuapp.com/api/v1/ingredients`, {
        mode: 'no-cors',
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          token
        },
        body: JSON.stringify({
          name: ingredient.name,
          description: ingredient.description
        })
    })
    .then((res) => {
      return res.json();
    })
    .then(res => console.log('this is res', res))
}
