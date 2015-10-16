import $ from 'jquery'
import Immutable from 'immutable';

const API = {
  post: (path, data) => {
    return API._send(path, data, { method: 'POST' })
  },

  get: (path) => {
    return $.ajax({
      url: API._makeURL(path),
      type: 'GET'
    }).then(function(response) {
      return Immutable.fromJS(response)
    })
  },

  delete: (path, data) => {
    return API._send(path, data, { method: 'DELETE' })
  },

  _send: (path, data, options) => {
    options = options || {}
    return $.ajax({
      url: API._makeURL(path),
      type: options.method,
      contentType: 'application/json',
      data: JSON.stringify(data)
    }).then(function(response) {
      return Immutable.fromJS(response)
    })
  },

  _makeURL: (path) => {
    return '/api/v1' + path
  }
}

export default API
