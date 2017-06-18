import { restrictionsChange } from '../../src/actions/client';

describe('client actions tests', () => {
  it('creates a CHANGE_RESTRICTIONS action', () => {
    expect(restrictionsChange('example restriction')).toEqual({
      type: 'CHANGE_RESTRICTIONS',
      payload: 'example restriction'
    });
  });
});
