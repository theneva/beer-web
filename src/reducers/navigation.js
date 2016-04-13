const initialState = {
  headers: [
    {id: 'home', text: 'Home', target: '/'},
    {id: 'list', text: 'List', target: '/beers'},
    {id: 'profile', text: 'My profile', target: '/me'}
  ],
  activePage: 'home'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'set active page':
      return Object.assign({}, state, {activePage: action.id});
    default:
      return state;
  }
};

