const INITIAL_STATE = { recipes: [{}] };

const recipesResults = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_RECIPE_RESULTS_PENDING':
      return { ...state, isFetching: true, didInvalidate: false };
    case 'GET_RECIPE_RESULTS_FULFILLED':
      return action.payload;
    default:
      return state;
  }
};

export default recipesResults;
