var gulp = require('gulp');
var config = require('../config')();
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');
var cleanCss = require('gulp-clean-css'); // minify css
var rename = require('gulp-rename');
var plumber = require('gulp-plumber'); // error handling plugin
var autoprefixer = require('gulp-autoprefixer');
var gulpprint = require('gulp-print');
var util = require('gulp-util');

/* Compiles less, creates sourcemaps, creates .css */
gulp.task('less', function () {
    util.log(util.colors.green('Running Less to CSS conversion (less->css)'));
    return gulp.src(config.src.lessFiles, { cwd: config.src.root })
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(less())
		.pipe(autoprefixer())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.dest.root))
        .pipe(gulpprint(function (filepath) {
            return util.colors.green("Dest less->css: " + filepath);
        }));
});

gulp.task('watch.less', function () {
    gulp.watch(config.src.lessFiles,  { cwd: config.src.root }, ['less']);
});