const INITIAL_STATE = {
  client: {
    id: 0,
    first_name: '',
    last_name: '',
    email: '',
    image_url: '',
    recipes: [],
    restrictions: []
  },
  loading: false
};

export default(state = INITIAL_STATE, action) => {

  switch (action.type) {

    case 'GET_CLIENT_PENDING':
      return { ...state, loading: true };

    case 'GET_CLIENT_FULFILLED':
      if (action.payload === 'Not Logged In') {
        return INITIAL_STATE;
      }
      return { ...state, client: action.payload, loading: false };

    case 'GET_CLIENT_REJECTED':
      return {
        ...state,
        loading: false,
        error: 'Unable To Fetch Client',
        client: INITIAL_STATE.client
      };

    case 'UPDATE_RESTRICTIONS':
      return { ...state, client: action.payload };

    default:
      return state;
  }
};
