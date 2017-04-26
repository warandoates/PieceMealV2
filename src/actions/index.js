export const createSearchAction = (recipe) => {
  return {
    type: 'SEARCH_RECIPE',
    payload: fetchRecipe(recipe)
  }
}

function fetchRecipe(recipe) {
  let promise1 = fetch(`https://piecemeal-api.herokuapp.com/api/v1/search/recipes?text=${recipe}`, {
                    method: 'get',
                    headers: {
                      'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTQ5MzEwNDQ5NSwiZXhwIjoxNDkzNzA5Mjk1fQ.HjinCTP_82dwGOkYxJvOnWZG9DbgdepG1OzD9UYajEU',
                      'Content-Type': 'application/json'
                    }
                })
                  .then(res => res.json());
  let promise2 = fetch(`https://piecemeal-api.herokuapp.com/api/v1/search/ingredients?text=${recipe}`, {
                    method: 'get',
                    headers: {
                      'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTQ5MzEwNDQ5NSwiZXhwIjoxNDkzNzA5Mjk1fQ.HjinCTP_82dwGOkYxJvOnWZG9DbgdepG1OzD9UYajEU',
                      'Content-Type': 'application/json'
                    }
                })
                  .then(res => res.json());
  let both = Promise.all([promise1, promise2]);
  both.then((bothResults) => {
    console.log("got result 1:", bothResults[0]);
    console.log("got result 2:", bothResults[1]);
  })
}
