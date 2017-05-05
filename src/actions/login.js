import { API_URL } from '../config/api';

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

export const loginUserOAuth = (token) => {
  return {
    type: 'LOGIN_USER',
    payload: loginOAuth(token)
  };
};

export const logoutUser = () => {
  return {
    type: 'LOGOUT_USER',
    payload: null
  };
};

function login(email, password) {
  return fetch(`${API_URL}/api/v1/token`, {
        mode: 'no-cors',
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password
        })
    })
    .then((res) => {
      if (res.status === 400) {
        return res.status;
      }
      return res.json();
    });
  }

  function loginOAuth(token) {
    console.log("token", token);
    return fetch(`${API_URL}/api/v1/tokenOAuth`, {
          mode: 'no-cors',
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            idToken: token.idToken
          })
      })
      .then((res) => {
        return res.json();
      });
  }
