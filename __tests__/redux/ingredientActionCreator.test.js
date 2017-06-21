import configureMockStore from 'redux-mock-store';
import promiseMiddleware from 'redux-promise-middleware';
import { getIngredients, fetchIngredients } from '../../src/actions';

const middlewares = [promiseMiddleware];
const mockStore = configureMockStore(middlewares);

describe('get ingredients', () => {
  const ingredientResultModel = {
   ingredients: [
     {
       id: 5,
       name: 'almond milk',
       description: 'Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.',
       active: true,
       image_url: null,
       tags: []
     },
     {
       id: 23,
       name: 'asafoetida (powder)',
       description: 'Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.',
       active: true,
       image_url: null,
       tags: []
       }
     ]
   };

  it('should return the expected action', () => {
    // fetch.mockResponse(JSON.stringify(ingredientResultModel));

    const expectedActions = { type: 'GET_INGREDIENT_RESULTS_FULFILLED', payload: {} };
    const actionss = Promise.getIngredients().payload;
    console.log(Promise.resolve(getIngredients().payload));
    const store = mockStore({ ingredients: [] });
    return store.dispatch(actionss()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
    // const amount = 2;
    // const expectedAction = {
    //   type: 'GET_INGREDIENT_RESULTS',
    //   payload: {}
    // };
    // expect(getIngredients()).toMatchObject(expectedAction);
  });
});
