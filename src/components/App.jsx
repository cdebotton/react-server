/**
 * @providesModule App
 * @flow
 */

"use strict";

var React           = require('react');
var {RouteHandler}  = require('react-router');
var {StoreMixin}    = require('../stores/Store');

function getStylesheet(env) {
  var src = env === 'production'
    ? '/stylesheets/app.min.css'
    : '/stylesheets/app.css';

  return <link rel="stylesheet" href={src} />;
}

function getBundle(env) {
  var src = env === 'production'
    ? '/bundle.min.js'
    : '/bundle.js';

  return <script src={src} />;
}

function getLivereload(env) {
  return env !== 'production'
    ? <script src="http://127.0.0.1:35729/livereload.js?snipver=1" />
    : <noscript />;
}

var App = React.createClass({
  mixins: [StoreMixin],

  propTypes: {
    env: React.PropTypes.string.isRequired
  },

  getDefaultProps(): Object {
    return {env: 'development'};
  },

  render(): any {
    var {env} = this.props;

    return (
      <html className="no-js" lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>React Server Scaffold</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="favicon" href="/img/favicon.ico" />
        {getStylesheet(env)}
      </head>
      <body>
        <h1>Hello, world!</h1>
        <RouteHandler />
        {getBundle(env)}
        {getLivereload(env)}
      </body>
      </html>
    );
  }
});

module.exports = App;
