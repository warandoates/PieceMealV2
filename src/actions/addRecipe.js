import { API_URL } from '../config/api';

export const postRecipe = (recipe, ingredients, steps, tags, token) => {

  console.log('postRecipe:', ingredients);

  // const orderedInstructions = steps.map((step, index) => {
  //   return { step_number: index + 1, instructions: step.instructions };
  // });

  // const ingredientStrings = ingredients.map((ingredient) => {
  //   return ingredient.id;
  // });

  const newRecipe = { ...recipe, ingredients, instructions: steps, tags };

  // console.log('postRecipe:', newRecipe);

  return {
    type: 'POST_RECIPE',
    payload: postFetchRecipe(newRecipe, token)
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

export const modifyIngredient = (id, name) => {
  return {
    type: 'MODIFY_INGREDIENT',
    payload: { id, name }
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

export const resetIngredient = () => {
  return {
    type: 'RESET_INGREDIENT',
    payload: {}
  };
};

export const resetInstruction = () => {
  return {
    type: 'RESET_INSTRUCTION',
    payload: {}
  };
};

export const addIngredient = (id, name, amount) => {
  console.log('addIngredient:', id);
  return { type: 'ADD_INGREDIENT', payload: { id, name, amount } };
}

export const addInstruction = (stepNumber, text) => {
  return { type: 'ADD_INSTRUCTION', payload: { step_number: stepNumber, instructions: text } };
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
