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
}

export default alt.createActions(APIKeyActions);
