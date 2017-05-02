
const INITIAL_STATE = { ingredients: [{}], success: false };

const ingredientsResults = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_INGREDIENT_RESULTS_PENDING':
    return { ...state, isFetching: true };
    case 'GET_INGREDIENT_RESULTS_FULFILLED':
      return { ...state, ingredients: action.payload.ingredients, isFetching: false };
    case 'POST_INGREDIENT_PENDING':
      return { ...state, isFetching: true, success: false };
    case 'POST_INGREDIENT_FULFILLED':
      return { ...state, success: true, isFetching: false };
    default:
      return state;
  }
};

export default ingredientsResults;
