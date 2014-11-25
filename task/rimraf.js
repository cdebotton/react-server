"use strict";

var gulp    = require('gulp');
var gRimraf = require('gulp-rimraf');

module.exports = function() {
  gulp.src('./dist/')
    .pipe(gRimraf());
};
