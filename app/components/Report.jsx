import React from 'react'
import Immutable from 'immutable'

import UserStore from 'stores/UserStore'
import ConfigStore from 'stores/ConfigStore'

import styles from 'scss/components/_report'

export default class Report extends React.Component {
  submitForm(e) {
    e.preventDefault();
    var address = this.refs.address.value;
    var report = this.refs.report.value.trim();
    if (!address || !report) {
      return console.log('handle this more effectively');
    }

    this.refs.address.value = '';
    this.refs.report.value = '';
    return true;
  }

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

  _getRedirectURL = () => {
    return ConfigStore.getState().config.get('baseURL') + '/report/callback'
  }

  _getState = () => {
    return ConfigStore.getState().config.get('state')
  }

  render() {
    let renderedResult;
    renderedResult = (
      <div className={styles.report}>
        <h1 className={styles.report__header}>File a report</h1>
        <form onSubmit={this.submitForm}>
          <input type="text" ref="address" placeholder="Enter a Bitcoin address" className={styles.report__input}/>
          <textarea type="text" ref="report" placeholder="Enter a report" className={styles.report__textarea}/>
        </form>
      </div>
    );
    return (
      <div>
        {renderedResult}
      </div>
    );
  }
}

Report.propTypes = { user: React.PropTypes.instanceOf(Immutable.Map) };
