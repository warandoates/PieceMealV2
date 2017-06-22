const INITIAL_STATE = {
  recipes: [],
  ingredients: [],
  filterRestricted: false
};

const searchRecipe = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SEARCH_RECIPE_FULFILLED':
      return { ...state, ...action.payload };
    case 'SET_FILTER_RESTRICTED':
      return { ...state, filterRestricted: action.newValue };
    default:
      return state;
  }
};

export default searchRecipe;
