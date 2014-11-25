/**
 * @providesModule AppDispatcher
 * @flow
 */

var {Dispatcher}      = require('flux');
var {extend}          = require('lodash');
var {PayloadSources}  = require('../constants/AppConstants');

var AppDispatcher = extend(new Dispatcher(), {
  handleViewAction(action: Action) {
    var payload: Payload = {
      source: PayloadSources.VIEW_SOURCE,
      action: action
    };

    this.dispatch(payload);
  },

  handleServerAction(action: Action) {
    var payload: Payload = {
      source: PayloadSources.SERVER_SOURCE,
      action: action
    };

    this.dispatch(payload);
  }
});

module.exports = AppDispatcher;
