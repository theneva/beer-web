const initialState = {
  username: 'theneva',
  savedBeers: [
    {_id: '0', name: 'Amundsen Pale Ale', category: 'Pale Ale', description: "Norway's best Pale Ale"},
    {_id: '1', name: 'Stella Artois', category: 'Lager', description: 'Also known as "The Wifebeater"'}
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}
