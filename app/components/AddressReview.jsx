import React from 'react'
// import API from 'utils/api'
import Immutable from 'immutable'
import Select from 'react-select'
import { VelocityComponent } from 'velocity-react'

import styles from 'scss/components/_addressReview'
import buttonStyles from 'scss/components/_button'

var EndorseButton = (props) => {
  return (
    <div className={styles.addressReview__endorseButton}>
      <button
        className={buttonStyles['button--green']}
        disabled={props.disabled}
        onClick={props.onClick}
      >
      <i className="fa fa-thumbs-up" style={{color: 'white'}}></i>
      </button>
      { props.disabled ? <span>Good</span> : null}
    </div>
  )
}

var ReportButton = (props) => {
  return (
    <div className={styles.addressReview__reportButton}>
      <button
        className={buttonStyles['button--red']}
        disabled={props.disabled}
        onClick={props.onClick}
      >
        <i className="fa fa-thumbs-down" style={{color: 'white'}}></i>
      </button>
      { props.disabled ? <span>Bad</span> : null}
    </div>
  )
}

class AddressReviewForm extends React.Component {
  _onTypeChange = (value) => {
    this.props.onChange({ type: value })
  }

  _onDescriptionChange = (e) => {
    this.props.onChange({ description: e.currentTarget.value })
  }

  _renderFormForKind() {
    let contents
    if (this.props.kind === 'endorsement') {
      contents = null
    } else if (this.props.kind === 'report') {
      let options = [
        { value: 'technical', label: 'Technical Issues' },
        { value: 'malicious', label: 'Malicious'}
      ]

      contents = <span>
        <div className={styles.addressReview__field}>
          <label>Type</label>
          <Select
            name='type'
            value={this.props.type}
            options={options}
            placeholder="What kind of issue?"
            searchable={false}
            onChange={this._onTypeChange}
          >
          </Select>
        </div>
      </span>
    }
    console.log('re-render')
    return <div>
      { contents }
      <div className={styles.addressReview__field}>
        <label>Description</label>
        <textarea onKeyUp={this._onDescriptionChange}/>
      </div>
    </div>
  }

  render() {
    return <div className={styles.addressReview__form}>
      { this._renderFormForKind() }
    </div>
  }
}

export default class AddressReview extends React.Component {
  constructor() {
    super()
    this.state = {
      kind: null,
      description: null,
      type: null
    }
  }

  _isValid() {
    if (this.state.kind === 'report') {
      return this.state.description && this.state.type
    } else {
      return !!this.state.description
    }
  }

  _onChange = (obj) => {
    this.setState(obj)
  }

  render() {
    return <div className={styles.addressReview}>
      <EndorseButton
        onClick={this._onChange.bind(this, { kind: 'endorsement' })}
        disabled={this.state.kind === 'endorsement'}
      ></EndorseButton>
      <ReportButton
        onClick={this._onChange.bind(this, { kind: 'report' })}
        disabled={this.state.kind === 'report'}
      ></ReportButton>
      <div style={{ clear: 'both' }} />

      <VelocityComponent
        ref="velocity"
        animation={'transition.slideDown' + (this.state.kind ? 'In' : 'Out') }
        duration={200}
      >
        <div>
          <AddressReviewForm {...this.state} onChange={this._onChange}/>
          <button
            className={buttonStyles['button--primary']}
            disabled={!this._isValid()}
          >Submit</button>
        </div>
      </VelocityComponent>
    </div>
  }
}

AddressReview.propTypes = { address: React.PropTypes.instanceOf(Immutable.Map) }
