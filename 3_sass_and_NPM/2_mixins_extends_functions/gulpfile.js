'use strict';

// general
const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');

// css
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cleanCSS = require('gulp-clean-css');

// compile scss into css
function style() {
  // 1. Where is scss file?
  return (
    gulp
      .src('./sass/**/*.scss')
      .pipe(sourcemaps.init())
      // 2. Compile sass file
      .pipe(sass())
      .on('error', sass.logError)
      // 3. Add prefixes to code
      .pipe(postcss([autoprefixer]))
      // Minify the CSS
      // .pipe(cleanCSS())
      // .pipe(sourcemaps.write())
      // 4. Where do I save the complied CSS?
      .pipe(gulp.dest('./css'))
      // 5. Stream changes to all browsers
      .pipe(browserSync.stream())
  );
}

// watcher
function watch() {
  // specify server to run
  browserSync.init({
    server: {
      // server directory
      baseDir: './'
    }
  });

  // Watch for any changes on scss files
  // run style task to complie any changes
  gulp.watch('./sass/**/*.scss', style);
}

exports.style = style;
exports.watch = watch;
