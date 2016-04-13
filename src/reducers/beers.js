const initialState = {
  beers: [
    {_id: '0', name: 'Amundsen Pale Ale', category: 'Pale Ale', description: "Norway's best Pale Ale"},
    {_id: '1', name: 'Stella Artois', category: 'Lager', description: 'Also known as "The Wifebeater"'},
    {_id: '2', name: 'Brooklyn East IPA', category: 'India Pale Ale', description: 'Brooklyn has done it again.'}
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
