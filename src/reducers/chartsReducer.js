const INITIAL_STATE = {
  ingredients_pie: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_INGREDIENTS_PIE_CHART_FULFILLED':
      const sum = action.payload.reduce((acc, val) => {
        return acc + parseInt(val.count);
      }, 0);

      action.payload = action.payload.map((row) => {
        row.count = parseInt(row.count);
        const prct = Math.round(((row.count / sum) * 100), -2);
        row.name = `${row.category}\n${prct}%`;
        delete row.category;
        return row;
      });

      return { ...state, ingredients_pie: action.payload };
    default:
     return state;
  }
};
