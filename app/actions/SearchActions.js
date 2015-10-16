import alt from 'altInstance'
import API from 'utils/api'

class SearchActions {
  start(address) {
    this.dispatch()
    API.get('/addresses/' + address).then(this.actions.startsuccess, this.actions.startfail)
  }

  startsuccess(key) {
    this.dispatch(key)
  }

  startfail(err) {
    this.dispatch(err)
  }

  clear() {
    this.dispatch()
  }
}

export default alt.createActions(SearchActions);
