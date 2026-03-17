/* eslint-disable */
'use strict';

const path = require('path');
const gulp = require('gulp');
const gulpif = require('gulp-if');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const concat = require('gulp-concat');
const concatCss = require('gulp-concat-css');
const cleanCSS = require('gulp-clean-css');
const through2 = require('through2');

function safeRequire(mod) {
  try {
    return require(mod);
  } catch (error) {
    return null;
  }
}

const less = safeRequire('gulp-less');

module.exports = function (config) {
  const { task, params } = config;
  const srcDir = path.resolve('src');
  const sassAliasImporter = url => (
    url.startsWith('@/') ? { file: path.resolve(srcDir, url.slice(2)) } : null
  );
  const handleLess = file => less && file.path.match(/\.less$/);
  const handleSass = file => file.path.match(/\.(scss|sass)$/);
  const trans2cssWithAlias = () =>
    gulp
      .src(params.styles)
      .pipe(gulpif(handleLess, less ? less() : through2.obj()))
      .pipe(
        gulpif(
          handleSass,
          sass({
            importer: sassAliasImporter,
            includePaths: [srcDir]
          })
        )
      )
      .pipe(autoprefixer())
      .pipe(cssnano({ zindex: false, reduceIdents: false }))
      .pipe(gulp.dest(params.dest.lib))
      .pipe(gulp.dest(params.dest.es))
      .pipe(concatCss('index.css'))
      .pipe(concat('index.css'))
      .pipe(cleanCSS())
      .pipe(gulp.dest(params.dest.lib))
      .pipe(gulp.dest(params.dest.es));

  const [compileCJS, compileES, compileSFC, copyStylesheet] = task;
  return [gulp.series(compileCJS, compileES), copyStylesheet, trans2cssWithAlias];
}
