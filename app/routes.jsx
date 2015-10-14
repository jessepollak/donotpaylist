/* eslint no-unused-vars: 0 */
import React from 'react';
import Route from 'react-router';

import Home from 'components/Home';
import App from 'components/App';
import Login from 'components/Login';

import UserStore from 'stores/UserStore';

function requireAuth(nextState, replaceState) {
  if (!UserStore.getState().user.get('authenticated')) {
    replaceState({ nextPathname: nextState.location.pathname }, '/login');
  }
}

export default (
  <Route component={App}>
    <Route path="/" component={Home} />
    <Route path="login" component={Login} />
  </Route>
);
