'use strict';

const { src, dest } = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass')(require('sass'));

function handleError(error) {
  console.error(error.message);
  return this.emit("end");
}

function buildStyles() {
  return src(['sass/main.scss'])
    .pipe(sass({
      outputStyle: 'compressed',
      includePaths: ['./node_modules/@uswds/uswds/packages'],
    }).on('error', handleError))
    .pipe(dest('_site/'));
}

exports.compile = buildStyles;
