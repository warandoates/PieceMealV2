import { API_URL } from '../config/api';

export const firstNameChange = (text) => {
  return {
    type: 'FIRST_NAME_CHANGE',
    payload: text
  };
};

export const lastNameChange = (text) => {
  return {
    type: 'LAST_NAME_CHANGE',
    payload: text
  };
};

export const emailChange = (text) => {
  return {
    type: 'EMAIL_CHANGE',
    payload: text
  };
};

export const passwordChange = (text) => {
  return {
    type: 'PASSWORD_CHANGE',
    payload: text
  };
};

export const confirmChange = (text) => {
  return {
    type: 'CONFIRM_CHANGE',
    payload: text
  };
};

export const signupUser = ({ firstName, lastName, email, password, confirm }) => {
  return {
    type: 'SIGNUP_USER',
    payload: signup(firstName, lastName, email, password)
  };
};

function signup(firstName, lastName, email, password) {
  return fetch(`${API_URL}/api/v1/clients`, {
        mode: 'no-cors',
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email,
          password
        })
    })
    .then((res) => {
      return res.json();
    });
  }
