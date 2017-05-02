const INITIAL_STATE = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirm: '',
  passwordMatch: true,
  loading: false,
  error: '',
  user: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FIRST_NAME_CHANGE':
      return { ...state, firstName: action.payload };
    case 'LAST_NAME_CHANGE':
      return { ...state, lastName: action.payload };
    case 'EMAIL_CHANGE':
      return { ...state, email: action.payload };
    case 'PASSWORD_CHANGE':
      return { ...state,
        password: action.payload,
        passwordMatch: state.confirm === action.payload
      };
    case 'CONFIRM_CHANGE':
      return { ...state,
        confirm: action.payload,
        passwordMatch: state.password === action.payload
      };
    case 'SIGNUP_USER_PENDING':
      return { ...state, loading: true, error: '', user: null };
    case 'SIGNUP_USER_FULFILLED':
      return { ...state, loading: false, error: '', user: action.payload };
    case 'SIGNUP_USER_REJECTED':
      return { ...state, loading: false, error: 'Unable To Login', user: null };
    default:
     return state;
  }
};
