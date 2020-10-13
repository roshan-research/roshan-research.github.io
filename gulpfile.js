var {task, watch, series, parallel, src, dest} = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');


var config = {
  baseDir: "public",
  scssSrc: 'src/scss/**/*index.scss',
  outputCssDir: 'public/dist/css',
  jsSrc: 'src/js',
  outputJsDir: 'public/dist/js',
  imgSrc: [
    'src/images/*.{JPG,jpg,png,gif}',
    'src/images/**/*.{JPG,jpg,png,gif}',
  ],
  outputImageDir: 'public/dist/images',
  port: process.env.PORT || 3000,
};

// Static Server + watching scss/html files
task('server', function () {
  browserSync.init({port: config.port, server: config.baseDir});
  watch(config.scssSrc, series('sass'));
  watch(config.baseDir + "/*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
task('sass', function () {
  return src(config.scssSrc)
      .pipe(sass().on('error', sass.logError))
      .pipe(dest(config.outputCssDir))
      .pipe(browserSync.stream());
});

task('images', function () {
  return src(config.imgSrc)
      .pipe(imagemin())
      .pipe(dest(config.outputImageDir))
      .pipe(browserSync.stream())
});

task('default', parallel('sass', 'server', 'images'));
