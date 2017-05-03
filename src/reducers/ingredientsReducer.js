
const INITIAL_STATE = { ingredients: [{}], success: false };

const ingredientsResults = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_INGREDIENT_RESULTS_REJECTED':
      return { ...state, isFetching: false, error: 'Unable To Add Ingredient' };
    case 'GET_INGREDIENT_RESULTS_PENDING':
    return { ...state, isFetching: true };
    case 'GET_INGREDIENT_RESULTS_FULFILLED':
      return { ...state, ingredients: action.payload.ingredients, isFetching: false };
    case 'POST_INGREDIENT':
      return { ...state, success: true, isFetching: false };
    case 'DELETE_INGREDIENT':
      return { ...state, response: action.payload};
    default:
      return state;
  }
};

export default ingredientsResults;
