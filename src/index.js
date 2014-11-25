/**
 * @jsx React.DOM
 * @flow
 */

"use strict";

var React  = require('react');
var Router = require('react-router');
var Routes = require('./components/Routes.jsx');

if ('undefined' !== typeof window) {
  window.React = React;

  Router.run(Routes, Router.HistoryLocation, function(Handler, state) {
    React.render(
      <Handler params={state.params} query={state.query} env={process.env.NODE_ENV} />, document
    );
  });
}
