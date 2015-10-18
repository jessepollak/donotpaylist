import React from 'react';
import { Link } from 'react-router';

import UserStore from 'stores/UserStore'

import styles from 'scss/components/_navigation'

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

  _renderActions = () => {
    var content;
    if (!this.state.user.get('authenticated')) {
      content = <span>
                  <Link to="/login">Log in</Link>
                </span>
    } else {
      content = <span>
        <Link to="/">Search</Link>
        <Link to="/dashboard">Dashboard</Link>
      </span>
    }

    return (<div className={styles.navigation__right}>
      {content}
    </div>)
  }

  render() {
    return (
      <nav role="navigation" className={styles.navigation}>
        <span>
          <Link to="/">Do Not Pay</Link>
          <Link to="/report">Report</Link>
          { this._renderActions() }
        </span>
      </nav>
    );
  }
}

Navigation.propTypes = { UserStore: React.PropTypes.object, ConfigStore: React.PropTypes.object };
