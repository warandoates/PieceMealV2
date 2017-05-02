

export const restictionsChange = (restrictions) => {
  return {
    type: 'CHANGE_RESTRICTIONS',
    payload: restrictions
  };
};

export const changeRestrictions = (clientId, restrictions) => {
  return {
    type: 'UPDATE_RESTRICTIONS',
    payload: updateRestrictions(clientId, restrictions)
  };
};

export const userChange = (client) => {
  return {
    type: 'GET_CLIENT',
    payload: getClient(client)
  };
}

function getClient(client) {
  return fetch(`https://piecemeal-api.herokuapp.com/api/v1/clients/${client.id}`, {
        mode: 'no-cors',
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'token': client.token
        }
    })
    .then((res) => {
      return res.json();
    });

}

function updateRestrictions(clientId, restrictions) {
  return fetch(`https://piecemeal-api.herokuapp.com/api/v1/clients/${clientId}/restrictions`, {
        mode: 'no-cors',
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ restrictions })
    })
    .then((res) => {
      return res.json();
    });
}
