import chartsReducer from '../../src/reducers/chartsReducer';

const INITIAL_STATE = {
  ingredients_pie: []
};
const NEXT_STATE = {
  ingredients_pie: []
};

describe('client Reducer test', () => {
  it('returns the initial state', () => {
    expect(chartsReducer(undefined, {})).toEqual(INITIAL_STATE);
    expect(chartsReducer(INITIAL_STATE, {}) === chartsReducer(NEXT_STATE, {})).toBe(false);
    expect(chartsReducer(INITIAL_STATE, {}) === chartsReducer(INITIAL_STATE, {})).toBe(true);
  });
  xit('returns ingerdients_pie array on state obect', () => {
    expect(chartsReducer(INITIAL_STATE, { type: 'GET_INGREDIENTS_PIE_CHART_FUFILLED', payload: [{count: 1, name: 'something'}] })).toEqual({ "ingredients_pie": [{ count: 1, name: 'something' }] })
  });
});
