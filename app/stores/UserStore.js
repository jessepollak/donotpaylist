import Immutable from 'immutable'
import alt from 'altInstance'

import UserActions from 'actions/UserActions'

class UserStore {

  constructor() {
    this.user = Immutable.Map({})

    this.on('init', this.bootstrap)
    this.on('bootstrap', this.bootstrap)

    this.bindListeners({
      handleLogout: UserActions.LOGOUT
    })
  }

  bootstrap() {
    if (!Immutable.Map.isMap(this.user)) {
      this.user = Immutable.fromJS(this.user)
    }
  }

  handleLogout() {
    this.user = Immutable.Map({ authenticated: false })
    this.emitChange()
    window.location = '/'
  }
}

// Export our newly created Store
export default alt.createStore(UserStore, 'UserStore');
