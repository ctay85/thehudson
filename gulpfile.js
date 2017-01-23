'use strict';
 
var gulp = require('gulp'),
	sass = require('gulp-sass'),
	watch = require('gulp-watch'),
	autoprefixer = require('gulp-autoprefixer'),
	cssmin = require('gulp-cssmin');


gulp.task('sass', function () {
  return gulp.src('./css/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(cssmin())
    .pipe(gulp.dest('./css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./css/*.scss', ['sass']);
});

gulp.task('watcher', function () {
  gulp.watch('./css/*.scss', ['sass']);
});


gulp.task('default', ['watcher']);