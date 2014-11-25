"use strict";

var gulp = require('gulp');

gulp.task('rimraf', require('./task/rimraf'));

gulp.task('assets', require('./task/assets').run);
gulp.task('assets:watch', require('./task/assets').watch);
gulp.task('assets:build', require('./task/assets').build);

gulp.task('stylus', require('./task/stylus').run);
gulp.task('stylus:watch', require('./task/stylus').watch);
gulp.task('stylus:build', require('./task/stylus').build);

gulp.task('browserify', require('./task/browserify').run);
gulp.task('browserify:watch', require('./task/browserify').watch);
gulp.task('browserify:build', require('./task/browserify').build);

gulp.task('express:dev', require('./task/express').development);
gulp.task('express:prd', require('./task/express').production);

gulp.task('build', ['assets:build', 'browserify:build', 'stylus:build']);
gulp.task('serve', ['build', 'express:prd']);
gulp.task('watch', ['assets:watch', 'express:dev', 'browserify:watch', 'stylus:watch']);
gulp.task('default', ['assets', 'browserify', 'stylus']);