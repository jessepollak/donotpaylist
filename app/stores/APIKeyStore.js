import Immutable from 'immutable';
import alt from 'altInstance';

import APIKeyActions from 'actions/APIKeyActions'

class APIKeyStore {

  constructor() {
    this.config = Immutable.Map({})

    this.on('init', this.bootstrap)
    this.on('bootstrap', this.bootstrap)

    this.bindListeners({
      handleCreateAPIKey: APIKeyActions.CREATESUCCESS
    })
  }

  bootstrap() {
    if (!Immutable.Map.isMap(this.config)) {
      this.keys = Immutable.fromJS(this.keys);
    }
  }

  handleCreateAPIKey(key) {
    this.keys = this.keys.push(key)
    this.emitChange()
  }

}

export default alt.createStore(APIKeyStore, 'APIKeyStore');
