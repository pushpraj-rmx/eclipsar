// gulpfile.js
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const webpack = require('webpack');
const webpackStream = require('webpack-stream');

function compileSass() {
  return gulp.src('src/scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('assets/css'));
}

function compileJS() {
  return gulp.src('src/js/main.js')
    .pipe(webpackStream(require('./webpack.config.js'), webpack))
    .pipe(gulp.dest('assets/js'));
}

function watch() {
  gulp.watch('src/scss/**/*.scss', compileSass);
  gulp.watch('src/js/**/*.js', compileJS);
}

exports.compileSass = compileSass;
exports.compileJS = compileJS;
exports.watch = watch;
