const baseUrl = 'http://localhost:8082';

const initialState = {
  authenticateUrl: `${baseUrl}/authenticate`,
  beersUrl: `${baseUrl}/beers`,
  meUrl: `${baseUrl}/me`,
};

export default (state = initialState, action) => {
  return state;
}
