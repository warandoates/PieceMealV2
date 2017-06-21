const INITIAL_STATE = {
  safeRecipes: [],
  safeIngredients: []
}

const recipesResults = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_SAFE_RECIPES_PENDING':
      return { ...state, isFetching: true, didInvalidate: false };
    case 'GET_SAFE_RECIPES_FULLFILLED':
      return { ...state, safeRecipes: action.payload, isFetching: false, didInvalidate: false };
    case 'GET_SAFE_RECIPES_REJECTED':
      return { ...state, isFetching: false, didInvalidate: false };

      case 'GET_SAFE_INGREDIENTS_PENDING':
        return { ...state, isFetching: true, didInvalidate: false };
      case 'GET_SAFE_INGREDIENTS_FULLFILLED':
        return { ...state, safeIngredients: action.payload, isFetching: false, didInvalidate: false };
      case 'GET_SAFE_INGREDIENTS_REJECTED':
        return { ...state, isFetching: false, didInvalidate: false };

    default:
      return state;
  }
};

export default recipesResults;
