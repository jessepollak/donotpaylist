/* eslint no-unused-vars: 0 */
import Iso from 'iso'
import React from 'react';
import ReactDOM from 'react-dom'
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { Router } from 'react-router';

import alt from 'altInstance';
import routes from 'routes.jsx';

/*
 * Client side bootstrap with iso and alt
 */
Iso.bootstrap((state, _, container) => {
  alt.bootstrap(state);
  console.log('in browser')
  ReactDOM.render(<Router history={createBrowserHistory()} children={routes} />, container);
});
