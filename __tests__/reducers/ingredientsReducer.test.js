import ingredients from '../../src/reducers/ingredientsReducer';

const INITIAL_STATE = { ingredients: [{}], success: false, response: {} };

describe('get ingredients reducers', () => {
  const rejectedAction = { type: 'GET_INGREDIENT_RESULTS_REJECTED' };
  const pendingAction = { type: 'GET_INGREDIENT_RESULTS_PENDING' };
  const fulfilledAction = { type: 'GET_INGREDIENT_RESULTS_FULFILLED', payload: { ingredients: 'test ingredient' } };

  it('should return the initial state', () => {
    expect(ingredients(INITIAL_STATE, 'some action')).toEqual(INITIAL_STATE);
    expect(ingredients(undefined, {})).toEqual(INITIAL_STATE);
  });

  it('should update isFetching to true', () => {
    expect(ingredients(INITIAL_STATE, pendingAction)).toMatchObject({ isFetching: true });
  });

  it('should update isFetching to true', () => {
    expect(ingredients(INITIAL_STATE, pendingAction)).toHaveProperty('isFetching', true);
    expect(ingredients(INITIAL_STATE, rejectedAction)).toHaveProperty('isFetching', false);
    expect(ingredients(INITIAL_STATE, fulfilledAction)).toHaveProperty('isFetching', false);
  });

  it('should return the ingredients payload', () => {
    expect(ingredients(INITIAL_STATE, fulfilledAction)).toMatchObject({ ingredients: 'test ingredient', isFetching: false });
  });

  it('should return an error property', () => {
    expect(ingredients(INITIAL_STATE, rejectedAction)).toMatchObject({ error: 'Unable To Add Ingredient', isFetching: false });
  });
});


describe('post Ingredients reducer', () => {
  const rejectedAction = { type: 'POST_INGREDIENT_REJECTED', payload: 'rejected payload' };
  const pendingAction = { type: 'POST_INGREDIENT_PENDING'};
  const fulfilledAction = { type: 'POST_INGREDIENT_FULFILLED', payload: 'success payload' };

  it('checks success property on state', () => {
    expect(ingredients(INITIAL_STATE, pendingAction)).toHaveProperty('success', false);
    expect(ingredients(INITIAL_STATE, rejectedAction)).toHaveProperty('success', false);
    expect(ingredients(INITIAL_STATE, fulfilledAction)).toHaveProperty('success', true);
  });

  it('checks isFetching property on state', () => {
    expect(ingredients(INITIAL_STATE, pendingAction)).toHaveProperty('isFetching', true);
    expect(ingredients(INITIAL_STATE, rejectedAction)).toHaveProperty('isFetching', false);
    expect(ingredients(INITIAL_STATE, fulfilledAction)).toHaveProperty('isFetching', false);
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
