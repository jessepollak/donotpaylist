import React from 'react'
import SearchStore from 'stores/SearchStore'
import API from 'utils/api'

import AddressStatus from 'components/AddressStatus'
import styles from 'scss/components/_addressView'
import { VelocityComponent } from 'velocity-react'

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
    if (this.state.endorsements) {
      return (
        <div className={styles.addressView__table}>
          <h5>Endorsements</h5>
          <Table
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
        </div>
      )
    } else {
      return <div></div>
    }
  }
}

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

  _rowGetter = () => {
    return [this.state.address.get('number_of_reports'), this.state.address.get('number_of_endorsements')]
  }

  _renderAddress = () => {
    if (this.state.address) {
      return (
        <div>
          <AddressStatus address={this.state.address} />
          <div className={styles.addressView__details}>
            <ReportsTable address={this.state.address} key={'reports-' + this.state.address.get('id')} />
            <EndorsementsTable address={this.state.address} key={'endorsements-' + this.state.address.get('id')} />
            <div style={{ clear: 'both' }}></div>
          </div>
        </div>
      )
    }
  }

  render() {
    return (
      <VelocityComponent ref="velocity" animation={'transition.flipBounceY' + (this.state.address ? 'In' : 'Out') } duration={500}>
        <div className={styles.addressView}>
          { this._renderAddress() }
        </div>
      </VelocityComponent>
    )
  }
}
