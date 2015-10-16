import React from 'react';

import styles from 'scss/components/_footer'

export default class Footer extends React.Component {

  render() {
    return (
      <div className={styles.footer}>
        <p>Supported by <a href="https://getclef.com">Clef</a> and <a href="https://bitgo.com">BitGo</a>.</p>
      </div>
    );
  }
}
