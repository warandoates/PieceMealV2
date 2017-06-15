import loginReducer from '../../src/reducers/loginReducer';

const INITIAL_STATE = {
  email: '',
  password: '',
  loading: false,
  error: '',
  user: null
};

const NEXT_STATE = {
  email: '',
  password: '',
  loading: false,
  error: '',
  user: null
};

describe('login reducer tests', () => {
  it('returns the initial state when undefined', () => {
    expect(loginReducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it('returns the original state object when action is not specified', () => {
    expect(loginReducer(INITIAL_STATE, {})).toEqual(INITIAL_STATE);
    expect(loginReducer(INITIAL_STATE, {}) === loginReducer(NEXT_STATE, {})).toBe(false);
  });

  it('returns state with email modified when email change case is specified', () => {
    expect(loginReducer(INITIAL_STATE, { type: 'EMAIL_CHANGE', payload: 'test@gmail.com' })).toEqual({
      email: 'test@gmail.com',
      password: '',
      loading: false,
      error: '',
      user: null
    });
  });

  it('returns state with updated password change when correct case is specified', () => {
    expect(loginReducer(INITIAL_STATE, { type: 'PASSWORD_CHANGE', payload: 'example password' })).toEqual({
      email: '',
      password: 'example password',
      loading: false,
      error: '',
      user: null
    });
  });

  it('returns state with loading toggle as true when pending case is specified', () => {
    expect(loginReducer(INITIAL_STATE, { type: 'LOGIN_USER_PENDING' })).toEqual({
      email: '',
      password: '',
      loading: true,
      error: '',
      user: null
    });
  });

  it('returns state with user object returned when fulfilled case is specified', () => {
    expect(loginReducer(INITIAL_STATE, { type: 'LOGIN_USER_FULFILLED', payload: {
      id: 1,
      first_name: 'Sample',
      last_name: 'Test',
      email: 'test@gmail.com',
      recipes: [],
      restrictions: []
    } })).toEqual({
      email: '',
      password: '',
      loading: false,
      error: '',
      user: {
        id: 1,
        first_name: 'Sample',
        last_name: 'Test',
        email: 'test@gmail.com',
        recipes: [],
        restrictions: []
      }
    });
  });

  it('returns state with error message displayed when rejected case is specified', () => {
    expect(loginReducer(INITIAL_STATE, { type: 'LOGIN_USER_REJECTED'})).toEqual({
      email: '',
      password: '',
      loading: false,
      error: 'Unable To Login',
      user: null
    });
  });

  it('returns state with user info removed when logout case is specified', () => {
    expect(loginReducer({
      email: '',
      password: '',
      loading: false,
      error: '',
      user: {
        id: 1,
        first_name: 'Sample',
        last_name: 'Test',
        email: 'test@gmail.com',
        recipes: [],
        restrictions: []
      }
    }, { type: 'LOGOUT_USER'})).toEqual({
      email: '',
      password: '',
      loading: false,
      error: '',
      user: undefined
    });
  });
});
