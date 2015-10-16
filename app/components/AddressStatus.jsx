import React from 'react';
import Immutable from 'immutable'

import styles from 'scss/components/_addressStatus'

class NeutralStatus extends React.Component {
  render() {
    return <div className={styles['addressStatus--neutral']}>Neutral</div>
  }
}

class BadStatus extends React.Component {
  render() {
    return <div className={styles['addressStatus--bad']}>Risky</div>
  }
}

class GoodStatus extends React.Component {
  render() {
    return <div className={styles['addressStatus--good']}>Safe</div>
  }
}

class NoDataStatus extends React.Component {
  render() {
    return <div className={styles['addressStatus--noData']}>Not Enough Data</div>
  }
}

export default class AddressStatus extends React.Component {
  _statusForAddress() {
    if (this.props.address.get('number_of_reports') === 0 && this.props.address.get('number_of_endorsements') === 0) {
      return <NoDataStatus />
    } else {
      if (this.props.address.get('trust_score') === 0) {
        return <NeutralStatus />
      } else if (this.props.address.get('trust_score') < 0) {
        return <BadStatus />
      } else {
        return <GoodStatus />
      }
    }
  }

  render() {
    return this._statusForAddress()
  }
}

AddressStatus.propTypes = { address: React.PropTypes.instanceOf(Immutable.Map) }
