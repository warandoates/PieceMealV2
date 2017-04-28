
// const data = [{ test: 'Success!' }];
// export default () => data;

const INITIAL_STATE = { ingredients: [{}] };

const ingredientsResults = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_INGREDIENT_RESULTS_PENDING':
    return Object.assign({}, state, {
      isFetching: true,
      didInvalidate: false
    });
    case 'GET_INGREDIENT_RESULTS_FULFILLED':
      return action.payload; //result of your promise == become new state
    default:
      return state;
  }
};

export default ingredientsResults;
