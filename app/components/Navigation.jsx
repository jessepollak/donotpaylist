import React from 'react';
import { Link } from 'react-router';

import UserActions from 'actions/UserActions';

export default class Navigation extends React.Component {

  _onLogout = () => {
    UserActions.logout();
  }

  render() {
    return (
      <nav role="navigation">
          <Link to="/">Do Not Pay</Link>
          <Link to="/login">Log in</Link>
      </nav>
    );
  }

}

Navigation.propTypes = { UserStore: React.PropTypes.object };
