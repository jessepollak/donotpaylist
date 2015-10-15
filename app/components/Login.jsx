/*global ClefButton */
import React from 'react';
import Immutable from 'immutable';

import UserActions from 'actions/UserActions';
import UserStore from 'stores/UserStore';
import ConfigStore from 'stores/ConfigStore'

import styles from 'scss/components/_login'

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = UserStore.getState();
  }

  componentDidMount() {
    UserStore.listen(this._onChange);
    this._renderClefLogin()
  }

  componentWillUnmount() {
    UserStore.unlisten(this._onChange);
  }

  _onChange = () => {
    this.setState({
      user: UserStore.getState().user
    });
  }

  _onLoginSubmit = () => {
    const email = React.findDOMNode(this.refs.email).value;
    const password = React.findDOMNode(this.refs.password).value;
    UserActions.manuallogin({
      email: email,
      password: password
    });
  }

  _renderClefLogin = () => {
    ClefButton.initialize({ el: this.refs.clefButton.getDOMNode() })
  }

  _getRedirectURL = () => {
    return ConfigStore.getState().config.get('baseURL') + '/login/callback'
  }

  _getState = () => {
    return ConfigStore.getState().config.get('state')
  }

  _getAppID = () => {
    return ConfigStore.getState().config.get('clefAppID')
  }

  render() {
    let renderedResult;
    if (this.state.user.get('authenticated')) {
      renderedResult = (<h1>You are logged in amigo</h1>);
    } else {
      if (this.state.user.get('isWaiting')) {
        renderedResult = (<h1>Waiting ...</h1>);
      } else {
        renderedResult = (
          <div className={styles.login}>
            <p>Login below to get started</p>
            <div className={styles.login__clef}>
              <div ref='clefButton' data-app-id={this._getAppID()} data-redirect-url={this._getRedirectURL()} data-type="login" data-embed="true" data-state={this._getState()}></div>
            </div>
          </div>
        );
      }
    }
    return (
        <div>
          {renderedResult}
        </div>
    );
  }
}

Login.propTypes = { user: React.PropTypes.instanceOf(Immutable.Map) };
