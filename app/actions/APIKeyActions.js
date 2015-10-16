import alt from 'altInstance'
import API from 'utils/api'

class APIKeyActions {
  create() {
    this.dispatch()
    return API.post('/keys').then(this.actions.createsuccess, this.actions.createfail)
  }

  createsuccess(key) {
    this.dispatch(key)
  }

  createfail(err) {
    this.dispatch(err)
  }

  delete(key) {
    this.dispatch(key)
    return API.delete('/keys/' + key.get('id')).then(this.actions.deletesuccess.bind(this, key), this.actions.deletefail)
  }

  deletefail() {
    this.dispatch()
  }

  deletesuccess(key) {
    this.dispatch(key)
  }
}

export default alt.createActions(APIKeyActions);
