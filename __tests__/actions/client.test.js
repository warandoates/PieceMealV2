import { restictionsChange } from '../../src/actions/client';

describe('client actions tests', () => {
  it('creates a CHANGE_RESTRICTIONS action', () => {
    expect(restictionsChange('example restriction')).toEqual({
      type: 'CHANGE_RESTRICTIONS',
      payload: 'example restriction'
    });
  });
});
