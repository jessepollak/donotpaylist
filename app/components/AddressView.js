import React from 'react'
import API from 'utils/api'
import Immutable from 'immutable'

import AddressStatus from 'components/AddressStatus'
import AddressReview from 'components/AddressReview'
import styles from 'scss/components/_addressView'

import FixedDataTable from 'fixed-data-table'
import ta from 'time-ago'
var timeago = ta()

var Table = FixedDataTable.Table
var Column = FixedDataTable.Column

class ReportsTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = { reports: null, isLoading: false }
  }

  componentWillMount() {
    this._load()
  }

  _load() {
    this.isLoading = true
    API.get('/addresses/' + this.props.address.get('id') + '/reports')
      .then((reports) => {
        this.setState({ reports: reports, isLoading: false })
      }, () => { this.setState({ isLoading: false})})
  }

  _rowGetter = (index) => {
    let report = this.state.reports.get(index)
    return ['❌', report.get('type'), timeago.ago(report.get('created_at'))]
  }

  render() {
    let content
    if (this.state.reports && this.state.reports.size > 0) {
      content = <Table
        rowHeight={50}
        rowGetter={this._rowGetter}
        rowsCount={this.state.reports.size}
        width={400}
        height={300}
        headerHeight={50}>
        <Column
          label="❌"
          width={35}
          dataKey={0}
        />
        <Column
          label="Type"
          width={100}
          dataKey={1}
        />
        <Column
          label="Date"
          width={265}
          dataKey={2}
        />
      </Table>
    } else {
      content = <p>No reports.</p>
    }

    return (
      <div className={styles.addressView__table}>
        <h5>Reports</h5>
        {content}
      </div>
    )
  }
}

class EndorsementsTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = { endorsements: null, isLoading: false }
  }

  componentWillMount() {
    this._load()
  }

  _load() {
    this.isLoading = true
    API.get('/addresses/' + this.props.address.get('id') + '/endorsements')
      .then((endorsements) => {
        this.setState({ endorsements: endorsements, isLoading: false })
      }, () => { this.setState({ isLoading: false})})
  }

  _rowGetter = (index) => {
    return ['✅', timeago.ago(this.state.endorsements.get(index).get('created_at')) ]
  }

  render() {
    let content
    if (this.state.endorsements && this.state.endorsements.size) {
      content = <Table
            rowHeight={50}
            rowGetter={this._rowGetter}
            rowsCount={this.state.endorsements.size}
            width={300}
            height={300}
            headerHeight={50}>
            <Column
              label="✅"
              width={35}
              dataKey={0}
            />
            <Column
              label="Date"
              width={265}
              dataKey={1}
            />
          </Table>
    } else {
      content = <p>No endorsements.</p>
    }

    return (
      <div className={styles.addressView__table}>
        <h5>Endorsements</h5>
        {content}
      </div>
    )
  }
}

export default class AddressView extends React.Component {
  _rowGetter = () => {
    return [this.props.address.get('number_of_reports'), this.props.address.get('number_of_endorsements')]
  }

  _renderAddress = () => {
    return (
      <div>
        <div className={styles.addressView__status}>
          <AddressStatus address={this.props.address} />
        </div>
        <div className={styles.addressView__details}>
          <ReportsTable address={this.props.address} key={'reports-' + this.props.address.get('id')} />
          <EndorsementsTable address={this.props.address} key={'endorsements-' + this.props.address.get('id')} />
          <div style={{ clear: 'both' }}></div>
        </div>
        <div className={styles.addressView__feedback}>
          <p>How was your experience with this address?</p>
          <AddressReview address={this.props.address} />
        </div>
      </div>
    )
  }

  render() {
    if (!this.props.address) {
      return <div></div>
    }

    return (
      <div className={styles.addressView}>
        { this._renderAddress() }
      </div>
    )
  }
}

AddressView.propTypes = { address: React.PropTypes.instanceOf(Immutable.Map) }
