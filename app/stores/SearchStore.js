import Immutable from 'immutable';
import alt from 'altInstance';

import SearchActions from 'actions/SearchActions'

class SearchStore {

  constructor() {
    this.address = null
    this.isLoading = false

    this.on('init', this.bootstrap);
    this.on('bootstrap', this.bootstrap);

    this.bindListeners({
      handleSearchStart: SearchActions.START,
      handleSearchStartSuccess: SearchActions.STARTSUCCESS,
      handleSearchStartFail: SearchActions.STARTFAIL,
      handleSearchClear: SearchActions.CLEAR
    });
  }

  bootstrap() {
    if (!Immutable.Map.isMap(this.address)) {
      this.address = Immutable.fromJS(this.address);
    }
  }

  handleSearchStart() {
    this.isLoading = true
    this.emitChange()
  }

  handleSearchStartSuccess(address) {
    this.address = address
    this.isLoading = false
    this.emitChange()
  }

  handleSearchStartFail() {
    this.isLoading = false
    this.emitChange()
  }

  handleSearchClear() {
    this.isLoading = false
    this.address = null
    this.emitChange()
  }


}

// Export our newly created Store
export default alt.createStore(SearchStore, 'SearchStore');
