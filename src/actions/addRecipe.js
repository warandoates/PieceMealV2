import { API_URL } from '../config/api';

export const postRecipe = (recipe, token) => {
  // console.log('this is the recipe in the action:', recipe, 'this is the token:', token);
  console.log('WFT!!!');
  return {
    type: 'POST_RECIPE',
    payload: postFetchRecipe(recipe, token)
    // payload: recipe
  };
};

export const modifyName = (text) => {
  return {
    type: 'MODIFY_NAME',
    payload: text
  };
};

export const modifyDescription = (text) => {
  return {
    type: 'MODIFY_DESCRIPTION',
    payload: text
  };
};

export const modifyNotes = (text) => {
  return {
    type: 'MODIFY_NOTES',
    payload: text
  };
};

export const modifyCookTime = (text) => {
  return {
    type: 'MODIFY_COOK_TIME',
    payload: text
  };
};

export const modifyPrepTime = (text) => {
  return {
    type: 'MODIFY_PREP_TIME',
    payload: text
  };
};

export const modifyIngredient = (text) => {
  return {
    type: 'MODIFY_INGREDIENT',
    payload: text
  };
};

export const modifyMeasurement = (text) => {
  return {
    type: 'MODIFY_MEASUREMENT',
    payload: text
  };
};

export const modifyInstruction = (text) => {
  return {
    type: 'MODIFY_INSTRUCTION',
    payload: text
  };
};

export const modifyTag = (text) => {
  return {
    type: 'MODIFY_TAG',
    payload: text
  };
};

export const addIngredient = (ingredient) => {
  return { type: 'ADD_INGREDIENT', payload: ingredient };
}

export const addInstruction = (text) => {
  return { type: 'ADD_INSTRUCTION', payload: { instructions: text } };
}

export const addTag = (text) => {
  return { type: 'ADD_TAG', payload: text };
}

function postFetchRecipe(recipe, token) {
  console.log('postFetchRecipe is being called with:', JSON.stringify(recipe), token);
  return fetch(`${API_URL}/api/v1/recipes`, {
    mode: 'no-cors',
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      token
    },
    body: JSON.stringify({ ...recipe })
  })
  .then((res) => {
    return res.json();
  });
}
