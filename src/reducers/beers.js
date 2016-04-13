const initialState = {
  beers: undefined,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'set beers':
      return Object.assign({}, state, {beers: action.beers});
    default:
      return state;
  }
};
