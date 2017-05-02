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
  switch (action.type) {
    case 'GET_CLIENT_PENDING':
      return INITIAL_STATE.client;
    case 'GET_CLIENT_FULFILLED':
      return action.payload;
    case 'GET_CLIENT_REJECTED':
      return {
        ...state,
        loading: false,
        error: 'Unable To Fetch Client',
        client: INITIAL_STATE.client
      };
    case 'UPDATE_RESTRICTIONS':
      return action.payload;
    default:
     return state;
  }
};
