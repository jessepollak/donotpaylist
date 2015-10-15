import React from 'react'
import APIKeys from './APIKeys'

import styles from 'scss/components/_dashboard'

export default class Dashboard extends React.Component {
  _handleSelected = (index, last) => {
    console.log('Selected tab: ' + index + ', Last tab: ' + last)
  }

  render() {
    return (
      <div className={styles.dashboard}>
        <h2>Your API Keys</h2>
        <p>You can use API keys to interact with the Do Not Pay API from your service. For more information, visit <a href="http://docs.donotpaylist.com">our documentation</a>.</p>
        <APIKeys />
      </div>
    );
  }
}
