'use strict';

const { src, dest } = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass')(require('sass'));
const path = require('path');

function handleError(error) {
  console.error(error.message);
  return this.emit('end');
}

function buildStyles() {
  const packagePath = path.join(
    path.dirname(require.resolve('@uswds/uswds')),
    '../../packages'
  );
  return src(['sass/main.scss'])
    .pipe(sass({
      style: 'compressed',
      loadPaths: [packagePath],
    }).on('error', handleError))
    .pipe(dest('_site/'));
}

exports.compile = buildStyles;
