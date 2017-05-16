import { API_URL } from '../config/api';

export const restictionsChange = (restrictions) => ({
    type: 'CHANGE_RESTRICTIONS',
    payload: restrictions
  });

export const changeRestrictions = (clientId, restrictions) => ({
    type: 'UPDATE_RESTRICTIONS',
    payload: updateRestrictions(clientId, restrictions)
  });

export const userChange = (client) => ({
    type: 'GET_CLIENT',
    payload: getClient(client)
  });

function getClient(client) {
  return fetch(`${API_URL}/api/v1/clients/${client.id}`, {
        mode: 'no-cors',
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          token: client.token
        }
    })
    .then((res) => res.json());
}

function updateRestrictions(clientId, restrictions) {
  return fetch(`${API_URL}/api/v1/clients/${clientId}/restrictions`, {
        mode: 'no-cors',
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ restrictions })
    })
    .then((res) => res.json());
}
