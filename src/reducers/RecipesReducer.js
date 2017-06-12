const INITIAL_STATE = { recipes: [{}] };

const recipesResults = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_RECIPE_RESULTS_PENDING':
    return Object.assign({}, state, {
      isFetching: true,
      didInvalidate: false
    });
    case 'GET_RECIPE_RESULTS_FULFILLED':
      return action.payload; //result of your promise == become new state
      
    default:
      return state;
  }
};

export default recipesResults;
