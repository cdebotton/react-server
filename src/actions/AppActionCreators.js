/**
 * @providesModule AppActionCreators
 * @flow
 */

var AppDispatcher = require('../dispatchers/AppDispatcher');
var {ActionTypes} = require('../constants/AppConstants');

var AppActionCreators = {
  foo(bar: ?string) {
    AppDispatcher.handleViewAction({
      type: ActionTypes.FOO,
      bar: bar
    });
  }
};

module.exports = AppActionCreators;
