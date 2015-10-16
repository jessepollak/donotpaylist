import Immutable from 'immutable';
import alt from 'altInstance';

import APIKeyActions from 'actions/APIKeyActions'

class APIKeyStore {

  constructor() {
    this.keys = Immutable.List([])

    this.on('init', this.bootstrap)
    this.on('bootstrap', this.bootstrap)

    this.bindListeners({
      handleCreateAPIKey: APIKeyActions.CREATESUCCESS,
      handleDeleteAPIKey: APIKeyActions.DELETESUCCESS
    })
  }

  bootstrap() {
    if (!Immutable.List.isList(this.keys)) {
      this.keys = Immutable.fromJS(this.keys);
    }
  }

  handleCreateAPIKey(key) {
    this.keys = this.keys.push(key)
    this.emitChange()
  }

  handleDeleteAPIKey(key) {
    this.keys = this.keys.delete(this.keys.findIndex((k) => { return k.equals(key) }))
    this.emitChange()
  }

}

export default alt.createStore(APIKeyStore, 'APIKeyStore');
