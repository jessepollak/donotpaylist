import React from 'react';
import SearchStore from 'stores/SearchStore'

import styles from 'scss/components/_addressView'
import { VelocityComponent } from 'velocity-react'

export default class AddressView extends React.Component {

  constructor(props) {
    super(props)
    this.state = SearchStore.getState()
  }

  componentDidMount() {
    SearchStore.listen(this._onChange)
  }

  componentWillUnmount() {
    SearchStore.unlisten(this._onChange)
  }

  _onChange = () => {
    this.setState(SearchStore.getState());
  }

  render() {
    return (
      <VelocityComponent ref="velocity" animation={'transition.flipBounceY' + (this.state.address ? 'In' : 'Out') } duration={500}>
        <div className={styles.addressView}>
          {this.state.address}
        </div>
      </VelocityComponent>
    )
  }
}
