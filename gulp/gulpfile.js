const { src, dest, watch, parallel}  = require('gulp');

const scss           = require('gulp-sass')(require('sass'));
const concat         = require('gulp-concat');
const browserSync   = require('browser-sync').create();
const uglify         = require('gulp-uglify-es').default;
const autoprefixer   = require('gulp-autoprefixer');


function browsersync() {
  browserSync.init({
    server : {
      baseDir: '../docs'
    }
  });
}


function scripts() {
  return src([
    '../docs/js/main.js'
  ])
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(dest('../docs/js'))
    .pipe(browserSync.stream())
}


function styles() {
  return src('../docs/scss/style.scss')
      .pipe(scss({outputStyle: 'compressed'}))
      .pipe(concat('style.min.css'))
      .pipe(autoprefixer({
        overrideBrowserslist: ['last 10 version'],
        grid: true
      }))
      .pipe(dest('../docs/css'))
      .pipe(browserSync.stream())
}


function watching() {
  watch(['../docs/scss/**/*.scss'], styles);
  watch(['../docs/js/**/*.js', '!../docs/js/main.min.js'], scripts);
  watch(['../docs/*.html']).on('change', browserSync.reload);
}

exports.styles = styles;
exports.watching = watching;
exports.browsersync = browsersync;
exports.scripts = scripts;


exports.default = parallel(styles ,scripts ,browsersync, watching);


