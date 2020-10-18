var {task, watch, series, parallel, src, dest} = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

// folder/*.html – will match all the HTML files in folder.
// root/**/*.html – will match all the HTML files in all the folders from root to its children.
// ['**/*.js', '!node_modules/'] – will find recursively *.js files except those in the node_modules directory.


// src — source files, pre-processed, un-minified.
// tmp — development files, pre-processed, un-minified. The directory where you will be running the web server.
// dist — production files, processed, minified.



var config = {
  baseDir: "public",
  srcHTML: 'public/*index.html',
  srcSCSS: 'src/**/*.scss',
  srcJS: 'src/**/*.js',
  srcIMG: [
    'src/**/*.{JPG,jpg,png,gif,svg}',
    'src/**/*.{JPG,jpg,png,gif,svg}',
  ],
  outputCssDir: 'public/dist/css',
  outputJsDir: 'public/dist/js',
  outputImageDir: 'public/dist/images',
};

task('server', function () {
  browserSync.init({port: config.port, server: config.baseDir});
});

// watching scss/js/html files
task('watch', function () {
  watch(config.srcSCSS, series('sass'));
  // watch(config.jsSrc, series('js')); TODO
  watch(config.srcHTML).on('change', browserSync.reload)
});

// Compile sass into CSS & auto-inject into browsers
task('sass', function () {
  return src(config.srcSCSS)
      .pipe(sass().on('error', sass.logError))
      .pipe(dest(config.outputCssDir))
      .pipe(browserSync.stream());
});

// Compile new-js into regular js & auto-inject into browsers
task('js', function () {
  return src(config.srcJS)
  //  ... TODO
});


task('default', parallel('server','watch','sass'));
