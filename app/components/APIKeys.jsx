import React from 'react'

import APIKeyActions from 'actions/APIKeyActions'
import APIKeyStore from 'stores/APIKeyStore'

import styles from 'scss/components/_apiKeys'
import buttonStyles from 'scss/components/_button'

class APIKey extends React.Component {
  render() {
    return (
      <div className={styles.apiKey__container}>
        <div className={styles.apiKey} >
          <div className={styles.apiKey__el}>
            <span className={styles.apiKey__label}>ID</span>
            <input className={styles.apiKey__content} value={this.props.id} disabled={true}/>
          </div>
          <div className={styles.apiKey__el}>
            <span className={styles.apiKey__label}>Secret</span>
            <input className={styles.apiKey__content} value={this.props.secret} disabled={true}/>
          </div>
        </div>
      </div>
    )
  }
}

export default class APIKeys extends React.Component {

  constructor(props) {
    super(props);
    this.state = APIKeyStore.getState();
  }

  componentDidMount() {
    APIKeyStore.listen(this._onChange);
  }

  componentWillUnmount() {
    APIKeyStore.unlisten(this._onChange);
  }

  _onChange = () => {
    this.setState({
      keys: APIKeyStore.getState().keys
    });
  }

  _create() {
    APIKeyActions.create()
  }

  _renderKeys() {
    return this.state.keys.map((key) => {
      return <APIKey id={key.get('id')} secret={key.get('secret')} key={key.get('id')} />
    })
  }

  render() {
    return (
      <div className={styles.apiKeys}>
        <a className={buttonStyles['button--primary']} onClick={this._create}>Create a new API Key</a>
        <div className={styles.apiKeys__keys}>
          { this._renderKeys() }
        </div>
      </div>
    );
  }
}
