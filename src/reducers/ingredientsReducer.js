
const INITIAL_STATE = { ingredients: [{}], success: false, response: {} };

const ingredientsResults = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_INGREDIENT_RESULTS_REJECTED':
      return { ...state, isFetching: false, error: 'Unable To Add Ingredient' };
    case 'GET_INGREDIENT_RESULTS_PENDING':
    return { ...state, isFetching: true };
    case 'GET_INGREDIENT_RESULTS_FULFILLED':
      return { ...state, ingredients: action.payload.ingredients, isFetching: false };
    case 'POST_INGREDIENT':
    console.log('i get here');
      return { ...state, success: true, isFetching: false, response: action.payload };
    case 'POST_INGREDIENT_PENDING':
    console.log('i get here and its pending');
      return { ...state, success: false, isFetching: true, };
    case 'POST_INGREDIENT_FULFILLED':
    console.log('i get here and its fulfilled', action.payload);
      return { ...state, success: true, isFetching: false, response: action.payload };
    case 'POST_INGREDIENT_REJECTED':
    console.log('i get here and its rejected');
      return { ...state, success: false, isFetching: false, response: action.payload };
    case 'DELETE_INGREDIENT':
      return { ...state, response: action.payload };
    case 'PUT_INGREDIENT_FULFILLED':
      return { ...state, response: action.payload };
    case 'PUT_INGREDIENT_PENDING':
      return { ...state, isFetching: true };
    case 'PUT_INGREDIENT_REJECTED':
      console.log('ingredient rejected?', action.payload);
      return { ...state, response: action.payload };
    default:
      return state;
  }
};

export default ingredientsResults;
