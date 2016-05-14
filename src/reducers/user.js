const initialState = {
  username: undefined,
  savedBeers: [],
  recommendations: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'set current username':
      return Object.assign({}, state, action.username);
    case 'set favorites':
      return Object.assign({}, state, action.savedBeers);
    case 'add favorite':
      return Object.assign({}, state, {
        savedBeers: [
          ...state.savedBeers,
          action.beer
        ]
      });
    default:
      return state;
  }
}
