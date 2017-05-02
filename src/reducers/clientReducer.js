const INITIAL_STATE = {
  'client': {
  'id': 0,
  'first_name': '',
  'last_name': '',
  'email': '',
  'recipes': [],
  'restrictions': [],

}

};

export default (state = INITIAL_STATE.client, action) => {
  console.log(state, `state in ClientReducer`)
  switch (action.type) {
    case 'GET_CLIENT_PENDING':
      return INITIAL_STATE.client
    case 'GET_CLIENT_FULFILLED':
    console.log('payload:', action.payload);
      return action.payload
    case 'GET_CLIENT_REJECTED':
      return { ...state, loading: false, error: 'Unable To Fetch Client', client: INITIAL_STATE.client};
    default:
     return state;
  }
};
