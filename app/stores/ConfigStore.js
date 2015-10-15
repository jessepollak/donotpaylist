import Immutable from 'immutable';
import alt from 'altInstance';

class ConfigStore {

  constructor() {
    this.config = Immutable.Map({});

    this.on('init', this.bootstrap);
    this.on('bootstrap', this.bootstrap);
  }

  bootstrap() {
    if (!Immutable.Map.isMap(this.config)) {
      this.config = Immutable.fromJS(this.config);
    }
  }

}

// Export our newly created Store
export default alt.createStore(ConfigStore, 'ConfigStore');
