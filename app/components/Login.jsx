import React from 'react';
import Immutable from 'immutable';

import UserActions from 'actions/UserActions';
import UserStore from 'stores/UserStore';

export default class Login extends React.Component {
  /*
   * This replaces getInitialState. Likewise getDefaultProps and propTypes are just
   * properties on the constructor
   * Read more here: https://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html#es6-classes
   */
  constructor(props) {
    super(props);
    this.state = UserStore.getState();
  }

  componentDidMount() {
    UserStore.listen(this._onChange);
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

  render() {
    let renderedResult;
    if (this.state.user.get('authenticated')) {
      renderedResult = (<h1>You are logged in amigo</h1>);
    } else {
      if (this.state.user.get('isWaiting')) {
        renderedResult = (<h1>Waiting ...</h1>);
      } else {
        renderedResult = (
          <div>
            <h1>Login will go here</h1>
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
