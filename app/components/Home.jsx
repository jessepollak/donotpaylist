import React from 'react';

import styles from 'scss/components/_home'
import Search from 'components/Search'
import AddressView from 'components/AddressView'

export default class Home extends React.Component {
  render() {
    return (
      <div className={styles.home}>
        <h1 className={styles.home__header}>Do Not Pay</h1>
        <h2 className={styles.home__subheader}>An easy to use, community maintained reputation check for Bitcoin addresses.</h2>
        <Search />
        <AddressView />
      </div>
    );
  }
}
