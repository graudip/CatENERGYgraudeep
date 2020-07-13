'use strict'

var gulp = require('gulp');
var del = require('del');
var htmlmin = require('gulp-htmlmin');
var svgSprite = require('gulp-svg-sprite');
var svgo = require('gulp-svgo');
var minify = require('gulp-minify');
var imagemin = require('gulp-imagemin');
var svgmin = require('gulp-svgmin');
var webp = require('gulp-webp');
var cache = require('gulp-cache');
var csso = require('gulp-csso');
var rename = require('gulp-rename');
var plumber = require('gulp-plumber');
var sourcemap = require('gulp-sourcemaps');
var less = require('gulp-less');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var concat = require('gulp-concat');
const eslint = require('gulp-eslint');
var server = require('browser-sync').create();
var htmlValidator = require('gulp-w3c-html-validator');
var cssValidator = require('gulp-w3c-css');
const jsValidate = require('gulp-jsvalidate');

gulp.task('css', function() {
	return gulp.src('source/less/style.less')
		.pipe(plumber())
		.pipe(sourcemap.init())
		.pipe(less())
		.pipe(postcss([
			autoprefixer()
		]))
		.pipe(sourcemap.write('.'))
		.pipe(concat('styles.css'))
		.pipe(csso())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('source/css'))
		.pipe(server.stream());
});

gulp.task('cssIn', function() {
  return gulp.src('source/css/styles.min.css')
    .pipe(gulp.dest('build/css/'))
})

gulp.task('jsMin', function() {
  return gulp.src("source/js/!(*.min).js")
    .pipe(minify({
      ext: {
        min: '.min.js'
      },
      ignoreFiles: ['-min.js']
    }))
    .pipe(gulp.dest('source/js/'))
});

gulp.task('jsIn', function() {
  return gulp.src('source/js/*.min.js')
    .pipe(gulp.dest('build/js/'))
})

gulp.task('webp', function() {
  return gulp.src('source/img/*.+(png|jpeg|jpg)')
    .pipe(webp({quality: 90}))
    .pipe(gulp.dest('source/img/'))
});

gulp.task('image', function() {
  return gulp.src('source/img/**/*.+(png|jpg|jpeg)')
    .pipe(cache(imagemin({
      interlaced: true,
      quality: 90
    })))
    .pipe(gulp.dest('source/img/'))
});

gulp.task('imageIn', function() {
  return gulp.src('source/img/*.webp')
    .pipe(gulp.dest('build/img/'))
});

gulp.task('htmlIn', function() {
  return gulp.src('source/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('build/'));
})

gulp.task('fontsIn', function() {
  return gulp.src('source/fonts/*')
    .pipe(gulp.dest('build/fonts'))
})

gulp.task('eslint', function() {
  return gulp.src('source/js/*.js')
  .pipe(plumber())
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError());
});

gulp.task('svgMin', function() {
  return gulp.src('source/img/*.svg')
    .pipe(svgmin())
    .pipe(gulp.dest('build/img/'))
});

gulp.task('svgSprite', function () {
  return gulp.src('source/img/*.svg')
    .pipe(svgSprite({
      mode: {
          stack: {
              sprite: "../sprite.svg" 
          }
      },
    })
    )
  .pipe(gulp.dest('source/img/'));
});

gulp.task('prodClean', function() {
  return del(["build/", "source/img/sprite.svg"])
});

gulp.task('svgFix', function() {
  return del(["source/img/sprite.svg"])
});

gulp.task('validateHTML', function() {
  console.log('Проверяются HTML файлы...')
  return gulp.src('source/*.html')
    .pipe(plumber())
    .pipe(htmlValidator())
    .pipe(htmlValidator.reporter())
});

gulp.task('validateCSS', function() {
  console.log('Проверяются CSS файлы...')
  return gulp.src('/source/css/*.css')
  .pipe(plumber())
    .pipe(cssValidator())
    .pipe(gulp.dest('./source/css/'))
});

gulp.task('validateJS', function() {
  console.log('Проверяются JavaScript файлы...')
  return gulp.src('source/js/*.js')
    .pipe(plumber())
    .pipe(jsValidate())
});

gulp.task('server', function() {
	server.init({
		server: 'source/',
		notify: false,
		open: true,
		cors: true,
		ui: false,
	});

  gulp.watch('source/img/**/*.+(png|jpg|jpeg)', gulp.series('image', 'webp'));
	gulp.watch('source/less/**/*.less', gulp.series('css'));
	gulp.watch('source/*.html').on('change', server.reload);
});

gulp.task('start', gulp.series('css', 'image', 'webp', 'svgFix', 'jsMin', 'svgSprite', 'eslint', 'server')); 

gulp.task('test', gulp.series('validateCSS', 'validateJS', 'eslint', 'validateHTML'));

gulp.task('build', gulp.series('prodClean', 'svgSprite', 'svgMin', 'image', 
  'webp', 'imageIn', 'css', 'cssIn', 'jsMin', 'jsIn', 'fontsIn', 'htmlIn'));

