
export default (state = null, action) => {
  switch (action.type) {
    case 'SELECT_INGREDIENT':
      return action.payload;
    default:
      return state;
  }
};
