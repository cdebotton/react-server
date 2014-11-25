"use strict";

var ReactTools    = require('react-tools');
var CoffeeScript  = require('coffee-script');

module.exports = {
  process: function(src, path) {
    if (path.match(/\.coffee$/)) {
      return CoffeeScript.compile(src, {bare: true});
    }
    else {
      return ReactTools.transform(src, {harmony: true, stripTypes: true});
    }

    return src;
  }
};
