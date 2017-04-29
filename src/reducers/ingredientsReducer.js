const INITIAL_STATE = { ingredients: [{}] };

const ingredientsResults = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_INGREDIENT_RESULTS_PENDING':
    return Object.assign({}, state, {
      isFetching: true,
      didInvalidate: false
    });
    case 'GET_INGREDIENT_RESULTS_FULFILLED':
      return { ...state, ingredients: action.payload };
    default:
      return state;
  }
};

export default ingredientsResults;
