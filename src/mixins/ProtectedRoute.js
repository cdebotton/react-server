/**
 * @providesModule ProtectedRoute
 * @flow
 * @jsx
 */

var AuthStore = require('../stores/AuthStore');

var ProtectedRoute = {
  statics: {
    willTransitionTo: function(transition: Transition, params: Object) {
      if (! AuthStore.isLoggedIn()) {
        transition.redirect('login');
      }
    }
  }
};

module.exports = ProtectedRoute;
