"use strict";

var express         = require('express');
var path            = require('path');
var fs              = require('fs');
var mongoose        = require('mongoose');
var passport        = require('passport');
var serveStatic     = require('serve-static');
var serveFavicon    = require('serve-favicon');
var compression     = require('compression');
var bodyParser      = require('body-parser');
var methodOverride  = require('method-override');

var env     = process.env.NODE_ENV === 'production' ? 'production' : 'development';
var port    = process.env.PORT ? process.env.PORT : 3000;
var app     = express();

if ('production' !== env) {
  var lr        = require('tiny-lr')();
  var connectLr = require('connect-livereload')();
}

app.use(compression())
   .use(serveFavicon(__dirname + '/../dist/img/favicon.ico'))
   .use(serveStatic(__dirname + '/../dist'))
   .use(bodyParser.urlencoded({extended: true}))
   .use(bodyParser.json())
   .use(methodOverride())
   .use(passport.initialize())
   .use(passport.session());

require('node-jsx').install({
  harmony: true,
  stripTypes: true
});

var Router = require('react-router');
var React  = require('react');

if ('production' === env ) {
  var Routes = require('./components/Routes.jsx');
}
else {
  app.use(connectLr);
  app.use(function(req, res, next) {
    for (var _path in require.cache) {
      if (path.extname(_path) === '.jsx') {
        delete require.cache[_path];
      }
    }

    Routes = require('./components/Routes.jsx');
    next();
  });
}

app.use(function(req, res, next) {
  Router.run(Routes, req.path, function(Handler, state) {
    var Factory = React.createFactory(Handler);

    var html = React.renderToString(Factory({
      params: state.params,
      query: state.query,
      env: env
    }));

    res.send("<!doctype html>\r\n"+html);
  });
});

app.listen(port, function(err) {
  if (err) throw err;
  console.log('Express running in `' + env + '` mode');
  console.log('Listening on port:', port);
});
