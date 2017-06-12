import ingredients from '../../src/reducers/ingredientsReducer';

const initialState = {};

describe('get ingredients reducers', () => {
  const rejectedAction = { type: 'GET_INGREDIENT_RESULTS_REJECTED' };
  const pendingAction = { type: 'GET_INGREDIENT_RESULTS_PENDING' };
  const fulfilledAction = { type: 'GET_INGREDIENT_RESULTS_FULFILLED', payload: { ingredients: 'test ingredient' } };

  it('should return the initial state', () => {
    expect(ingredients(initialState, 'some action')).toEqual(initialState);
  });

  it('should update isFetching to true', () => {
    expect(ingredients(initialState, pendingAction)).toEqual({ isFetching: true });
  });

  it('should update isFetching to true', () => {
    expect(ingredients(initialState, pendingAction)).toHaveProperty('isFetching', true);
    expect(ingredients(initialState, rejectedAction)).toHaveProperty('isFetching', false);
    expect(ingredients(initialState, fulfilledAction)).toHaveProperty('isFetching', false);
  });

  it('should return the ingredients payload', () => {
    expect(ingredients(initialState, fulfilledAction)).toEqual({ ingredients: 'test ingredient', isFetching: false });
  });

  it('should return an error property', () => {
    expect(ingredients(initialState, rejectedAction)).toEqual({ error: 'Unable To Add Ingredient', isFetching: false });
  });
});


describe('post Ingredients reducer', () => {
  const rejectedAction = { type: 'POST_INGREDIENT_REJECTED', payload: 'rejected payload' };
  const pendingAction = { type: 'POST_INGREDIENT_PENDING'};
  const fulfilledAction = { type: 'POST_INGREDIENT_FULFILLED', payload: 'success payload' };

  it('checks success property on state', () => {
    expect(ingredients(initialState, pendingAction)).toHaveProperty('success', false);
    expect(ingredients(initialState, rejectedAction)).toHaveProperty('success', false);
    expect(ingredients(initialState, fulfilledAction)).toHaveProperty('success', true);
  });

  it('checks isFetching property on state', () => {
    expect(ingredients(initialState, pendingAction)).toHaveProperty('isFetching', true);
    expect(ingredients(initialState, rejectedAction)).toHaveProperty('isFetching', false);
    expect(ingredients(initialState, fulfilledAction)).toHaveProperty('isFetching', false);
  });

  it('returns correct payload', () => {
    expect(ingredients(null, fulfilledAction)).toMatchObject({ response: 'success payload' });
    expect(ingredients(null, rejectedAction)).toMatchObject({ response: 'rejected payload' });
  });
});

describe('put ingredients reducers', () => {
  const rejectedAction = { type: 'PUT_INGREDIENT_REJECTED', payload: 'rejected payload' };
  const pendingAction = { type: 'PUT_INGREDIENT_PENDING'};
  const fulfilledAction = { type: 'PUT_INGREDIENT_FULFILLED', payload: 'success payload' };

  it('checks isFetching property on state', () => {
    expect(ingredients(null, rejectedAction)).toMatchObject({ isFetching: false });
    expect(ingredients(null, pendingAction)).toMatchObject({ isFetching: true });
    expect(ingredients(null, fulfilledAction)).toMatchObject({ isFetching: false });
  });

  it('returns correct payload', () => {
    expect(ingredients(null, fulfilledAction)).toMatchObject({ response: 'success payload' });
    expect(ingredients(null, rejectedAction)).toMatchObject({ response: 'rejected payload' });
  });
});

describe('delete ingredients reducer', () => {
  const deleteAction = { type: 'DELETE_INGREDIENT', payload: 'deleted test item' };
  it('returns the correct payload', () => {
    expect(ingredients(null, deleteAction)).toMatchObject({ response: 'deleted test item' });
  });
});
