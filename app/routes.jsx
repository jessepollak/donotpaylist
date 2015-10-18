/* eslint no-unused-vars: 0 */
import React from 'react';
import Route from 'react-router';

import Home from 'components/Home';
import App from 'components/App';
import Login from 'components/Login';
import Dashboard from 'components/Dashboard';
import Report from 'components/Report';

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
    <Route path="report" component={Report} />
    <Route path="dashboard" component={Dashboard} onEnter={requireAuth} />
  </Route>
);
