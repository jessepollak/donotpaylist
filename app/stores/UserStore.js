import Immutable from 'immutable';
import alt from 'altInstance';

class UserStore {

  constructor() {
    this.user = Immutable.Map({});

    this.on('init', this.bootstrap);
    this.on('bootstrap', this.bootstrap);

    this.bindListeners({});
  }

  bootstrap() {
    if (!Immutable.Map.isMap(this.user)) {
      this.user = Immutable.fromJS(this.user);
    }
  }


}

// Export our newly created Store
export default alt.createStore(UserStore, 'UserStore');
