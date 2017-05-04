export const emailChanged = (text) => {
  return {
    type: 'EMAIL_CHANGE',
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: 'PASSWORD_CHANGE',
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  return {
    type: 'LOGIN_USER',
    payload: login(email, password)
  };
};

export const logoutUser = () => {
  return {
    type: 'LOGOUT_USER',
    payload: null
  };
}

function login(email, password) {
  return fetch(`https://piecemeal-api.herokuapp.com/api/v1/token`, {
        mode: 'no-cors',
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password
        })
    })
    .then((res) => {
      return res.json();
    });
  }
