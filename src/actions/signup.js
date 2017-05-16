import { API_URL } from '../config/api';

export const firstNameChange = (payload) => ({
    type: 'FIRST_NAME_CHANGE',
    payload
  });

export const lastNameChange = (payload) => ({
    type: 'LAST_NAME_CHANGE',
    payload
  });

export const emailChange = (payload) => ({
    type: 'EMAIL_CHANGE',
    payload
  });

export const passwordChange = (payload) => ({
    type: 'PASSWORD_CHANGE',
    payload
  });

export const confirmChange = (payload) => ({
    type: 'CONFIRM_CHANGE',
    payload
  });

export const signupUser = ({ firstName, lastName, email, password, confirm }) => ({
    type: 'SIGNUP_USER',
    payload: signup(firstName, lastName, email, password)
  });

function signup(firstName, lastName, email, password) {
  return fetch(`${API_URL}/api/v1/clients`, {
        mode: 'no-cors',
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email,
          password
        })
    })
    .then((res) => res.json());
  }
