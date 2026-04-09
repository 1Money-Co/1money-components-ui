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
const fs = require('fs');

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

  // Post-build: rewrite scss imports to css in emitted JS/d.ts and remove raw
  // preprocessor source files from the published output. This keeps consumers
  // free of any sass dependency and avoids shipping source files that
  // reference the '@/' alias which only resolves inside this repo.
  const rewriteScssToCss = done => {
    const targets = [params.dest.lib, params.dest.es].filter(Boolean);
    const walk = dir => {
      if (!fs.existsSync(dir)) return;
      for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) {
          walk(full);
        } else if (/\.(js|d\.ts|map)$/.test(entry.name)) {
          const src = fs.readFileSync(full, 'utf8');
          const next = src.replace(
            /(["'])(\.{1,2}\/[^"']+?)\.(scss|sass|less)\1/g,
            '$1$2.css$1'
          );
          if (next !== src) fs.writeFileSync(full, next);
        } else if (/\.(scss|sass|less)$/.test(entry.name)) {
          fs.unlinkSync(full);
        }
      }
    };
    targets.forEach(walk);
    done();
  };

  const [compileCJS, compileES, compileSFC, copyStylesheet] = task;
  return [
    gulp.series(
      gulp.parallel(
        gulp.series(compileCJS, compileES),
        copyStylesheet,
        trans2cssWithAlias
      ),
      rewriteScssToCss
    )
  ];
}
