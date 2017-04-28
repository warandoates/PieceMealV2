
const data = [{ test: 'Success!' }];
export default () => data;

const INITIAL_STATE = {
  ingredients: [{
      id: 1,
      name: 'bacon',
      active: true,
      tags: ['meat', 'pork']
    },
    {
      id: 2,
      name: 'egg',
      active: true,
      tags: ['vegetarian']
    }
  ]
};

const ingredientsResults = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_INGREDIENT_RESULTS_FULFILLED':
      return action.payload; //result of your promise == become new state
    default:
      return state;
  }
};

export default ingredientsResults;
