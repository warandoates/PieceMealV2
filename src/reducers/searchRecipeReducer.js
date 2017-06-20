const INITIAL_STATE = {
  recipes: [],
  ingredients: []
};

const searchRecipe = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SEARCH_RECIPE_FULFILLED':
      return action.payload;
    default:
      return state;
  }
};

export default searchRecipe;
