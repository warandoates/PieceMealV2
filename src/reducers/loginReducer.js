const INITIAL_STATE = {
  email: '',
  password: '',
  loading: false,
  error: '',
  user: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'EMAIL_CHANGE':
      return { ...state, email: action.payload };
    case 'PASSWORD_CHANGE':
      return { ...state, password: action.payload };
    case 'LOGIN_USER_PENDING':
      return { ...state, loading: true, error: '', user: null };
    case 'LOGIN_USER_FULFILLED':
      return { ...state, loading: false, error: '', user: action.payload };
    case 'LOGIN_USER_REJECTED':
      return { ...state, loading: false, error: 'Unable To Login', user: null };
    case 'LOGOUT_USER':
      return { ...state, user: action.payload };
    default:
     return state;
  }
};
