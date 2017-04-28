const INITIAL = {
  recipes: [],
  ingredients: []
};
const searchRecipe = (state = INITIAL, action) => {
  switch (action.type) {
    case 'SEARCH_RECIPE_FULFILLED':
      return action.payload; //result of your promise == become new state
    default:
      return state;
  }
};

export default searchRecipe;
