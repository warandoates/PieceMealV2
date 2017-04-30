export default (state = null, action) => {
  switch (action.type) {
    case 'SELECT_RECIPE_FULFILLED':
      return action.payload;
    default:
      return state;
  }
};
