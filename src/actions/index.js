export const createSearchAction = (recipe) => {
  return {
    type: 'SEARCH_RECIPE',
    payload: fetchRecipe(recipe)
  };
};

function fetchRecipe(recipe) {
  const promise1 = fetch(`https://piecemeal-api.herokuapp.com/api/v1/search/recipes?text=${recipe}`, {
                    method: 'get',
                    headers: {
                      'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTQ5MzEwNDQ5NSwiZXhwIjoxNDkzNzA5Mjk1fQ.HjinCTP_82dwGOkYxJvOnWZG9DbgdepG1OzD9UYajEU',
                      'Content-Type': 'application/json'
                    }
                })
                  .then(res => res.json());
  const promise2 = fetch(`https://piecemeal-api.herokuapp.com/api/v1/search/ingredients?text=${recipe}`, {
                    method: 'get',
                    headers: {
                      'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTQ5MzEwNDQ5NSwiZXhwIjoxNDkzNzA5Mjk1fQ.HjinCTP_82dwGOkYxJvOnWZG9DbgdepG1OzD9UYajEU',
                      'Content-Type': 'application/json'
                    }
                })
                  .then(res => res.json());
  const both = Promise.all([promise1, promise2]);
  both.then((bothResults) => {
    // console.log("got result 1:", bothResults[0]);
    // console.log("got result 2:", bothResults[1]);
  });
}

export const selectIngredient = (ingredientId) => {
  return {
    type: 'SELECT_INGREDIENT',
    payload: ingredientId
  };
};

export const emailChanged = (text) => {
  return {
    type: 'EMAIL_CHANGE',
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: 'PASSWORD_CHANGE',
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  return {
    type: 'LOGIN_USER',
    payload: login(email, password)
  };
};

function login(email, password) {
  fetch(`https://piecemeal-api.herokuapp.com/api/v1/token`, {
        mode: 'no-cors',
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password
        })
    })
    .then((res) => {
      return res.json();
    })
}
