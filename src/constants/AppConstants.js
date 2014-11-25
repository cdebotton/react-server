/**
 * @providesModule AppConstants
 * @flow
 */

var keyMirror = require('react/lib/keyMirror');

var AppConstants = {
  PayloadSources: keyMirror({
    SERVER_SORCE  : null,
    VIEW_SOURCE   : null
  }),

  ActionTypes: keyMirror({
    FOO           : null,
    BAR           : null
  })
};

module.exports = AppConstants;
