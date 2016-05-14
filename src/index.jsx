import React, {
    Component,
    PropTypes
} from 'react';

import { render } from 'react-dom';

import {
    createStore,
    combineReducers
} from 'redux';

import { Provider } from 'react-redux';

import {
    Router,
    IndexRoute,
    Route,
    browserHistory
} from 'react-router';

import {
    syncHistoryWithStore,
    routerReducer
} from 'react-router-redux';

import reducers from './reducers/index.js';

import App from './containers/App.jsx';
import Home from './components/Home.jsx';
import BeerListContainer from './containers/BeerListContainer.jsx';
import ProfileContainer from './containers/ProfileContainer.jsx';
import Auth from './containers/AuthContainer.jsx';

const store = createStore(
    combineReducers({
      ...reducers,
      routing: routerReducer
    })
);

const history = syncHistoryWithStore(browserHistory, store);

render((
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Home}/>
          <Route path="beers" component={BeerListContainer}/>
          <Route path="me" component={ProfileContainer}/>
          <Route path="login" component={Auth}/>
        </Route>
      </Router>
    </Provider>
), document.getElementById('root'));
