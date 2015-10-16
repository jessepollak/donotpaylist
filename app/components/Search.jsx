import React from 'react'
import bitcoinAddress from 'bitcoin-address'
import SearchActions from 'actions/SearchActions'
import SearchStore from 'stores/SearchStore'

import { isBrowser } from 'utils/environment'
import styles from 'scss/components/_search'

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = SearchStore.getState()
  }

  componentDidMount() {
    SearchStore.listen(this._onChange)
  }

  componentWillUnmount() {
    SearchStore.unlisten(this._onChange)
  }

  _onChange = () => {
    this.setState(SearchStore.getState())
  }

  _validateAndSearch = () => {
    var maybeAddress = this.refs.input.value
    if (bitcoinAddress.validate(maybeAddress)) {
      if (!this.state.address || this.state.address.get('id') !== maybeAddress) {
        SearchActions.start(maybeAddress)
      }
    } else {
      SearchActions.clear()
    }
  }

  _renderSpinner = (visible) => {
    let spinner
    if (isBrowser()) {
      var Loader = require('halogen/ScaleLoader')
      spinner = <Loader color="#3498db" size="16px" />
    } else {
      spinner = <div></div>
    }
    let className = visible ? 'search__spinner' : 'search__spinner--hidden'
    return <span className={styles[className]}>{spinner}</span>
  }

  render() {
    return <div className={styles.search}>
      <input
        ref="input"
        placeholder="Enter a Bitcoin address"
        className={styles.search__input}
        onKeyUp={this._validateAndSearch} />
      { this._renderSpinner(this.state.isLoading) }
    </div>
  }
}

