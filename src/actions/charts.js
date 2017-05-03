
export const fetchIngredientData = () => {
  return {
    type: 'GET_INGREDIENTS_PIE_CHART',
    payload: getIngredientData()
  };
};

function getIngredientData() {
  return fetch(`https://piecemeal-api.herokuapp.com/api/v1/pie_chart/ingredients`, {
        mode: 'no-cors',
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
    })
    .then((res) => {
      return res.json();
    });
  }
