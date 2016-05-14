const initialState = {
  loginUsername: '',
  loginPassword: '',
  token: undefined,
  error: undefined
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'set login username':
      return Object.assign({}, state, {loginUsername: action.username});
    case 'set login password':
      return Object.assign({}, state, {loginPassword: action.password});
    case 'set token':
      return Object.assign({}, state, {token: action.token});
    case 'report error':
      return Object.assign({}, state, {error: action.error});
    case 'clear error':
      return Object.assign({}, state, {error: undefined});
    default:
      return state;
  }
};
