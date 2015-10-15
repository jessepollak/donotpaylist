import $ from 'jquery'
import Immutable from 'immutable';

const API = {
  post: (path, data) => {
    return $.ajax({
      url: API._makeURL(path),
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(data)
    }).then(function(response) {
      return Immutable.fromJS(response)
    })
  },

  get: (path) => {
    return $.ajax({
      url: API._makeURL(path),
      type: 'GET'
    }).then(function(response) {
      return Immutable.fromJS(response)
    })
  },

  _makeURL: (path) => {
    return '/api/v1' + path
  }
}

export default API
