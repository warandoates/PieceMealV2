const searchRecipe = (state = [], action) => {
  switch (action.type) {
    case 'SEARCH_RECIPE_FULFILLED':
    // console.log(action.payload);
      return action.payload; //result of your promise == become new state
    default:
      return state;
  }
};

export default searchRecipe;
