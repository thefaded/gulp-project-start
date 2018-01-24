'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const debug = require('gulp-debug');
const sourcemaps = require('gulp-sourcemaps');
const gulpIf = require('gulp-if');

// Paths
const cssSrcPath = 'assets/css/sass/style.scss';
const cssSrcFPath = 'assets/css';
const cssDestPath = './';

// Запуск: NODE_ENV=production gulp
const isDev = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

gulp.task('styles', function() {
    return gulp.src(cssSrcPath)
        .pipe(gulpIf(isDev, sourcemaps.init()))
        .pipe(debug({title: "Style:"}))
        .pipe(sass())
        .pipe(gulpIf(isDev, sourcemaps.write()))
        .pipe(gulp.dest('./'));
});

// 
gulp.watch([cssSrcPath, cssSrcFPath + '/**/*.scss'], ['styles']);

