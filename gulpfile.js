'use strict';
const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');

let files = ['index.js', 'lib/**/*.js', 'test/**/*.js', 'gulpfile.js'];

gulp.task('lint: test', () => {
  return gulp.src(files)
  .pipe(eslint({
    'useEslintrc': true
  }))
  .pipe(eslint.format());
});

gulp.task('mocha: test', () => {
  return gulp.src(files)
  .pipe(mocha());
});

gulp.task('watch', () => {
  gulp.watch(files, ['lint: test', 'mocha: test']);
});

gulp.task('default', ['watch']);
