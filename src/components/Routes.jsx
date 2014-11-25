/**
 * @providesModule Routes
 * @flow
 */

"use strict";

var React                                 = require('react');
var {Route, DefaultRoute, NotFoundRoute}  = require('react-router');
var App                                   = require('./App.jsx');
var HomeHandler                           = require('./HomeHandler.jsx');

module.exports = (
  <Route handler={App}>
    <DefaultRoute name="index" handler={HomeHandler} />
  </Route>
);
