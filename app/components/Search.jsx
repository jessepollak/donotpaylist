import React from 'react'
import bitcoinAddress from 'bitcoin-address'
import SearchActions from 'actions/SearchActions'
import SearchStore from 'stores/SearchStore'

import AddressView from 'components/AddressView'
import { VelocityComponent } from 'velocity-react'

import { isBrowser } from 'utils/environment'
import styles from 'scss/components/_search'

class Search extends React.Component {
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

export default class SearchWithAddressView extends React.Component {
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
    var state = SearchStore.getState()
    state.cachedAddress = this.state.address
    this.setState(state)
  }

  render() {
    return (
      <div>
        <Search />
        <VelocityComponent ref="velocity" animation={'transition.expand' + (this.state.address ? 'In' : 'Out') } duration={200}>
          <AddressView address={this.state.address || this.state.cachedAddress} />
        </VelocityComponent>
      </div>
    )
  }
}

