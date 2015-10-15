import React from 'react';
import { Link } from 'react-router';

import UserStore from 'stores/UserStore'

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = UserStore.getState()
  }

  componentDidMount() {
    UserStore.listen(this._onChange)
  }

  componentWillUnmount() {
    UserStore.unlisten(this._onChange)
  }

  _onChange = () => {
    this.setState({
      user: UserStore.getState().user
    })
  }

  _renderLoginLink = () => {
    if (!this.state.user.get('authenticated')) {
      return <Link to="/login">Log in</Link>
    }
  }

  render() {
    return (
      <nav role="navigation">
          <Link to="/">Do Not Pay</Link>
          { this._renderLoginLink() }
      </nav>
    );
  }
}

Navigation.propTypes = { UserStore: React.PropTypes.object, ConfigStore: React.PropTypes.object };
