'use strict';
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    babelify = require('babelify'),
    browserify = require('browserify'),
    browserSync = require('browser-sync'),
    reload  = browserSync.reload,
    source = require('vinyl-source-stream'),
    less = require('gulp-less'),
    minifyCSS = require('gulp-minify-css'),
    autoprefixer = require('gulp-autoprefixer'),
    glob = require('glob');

// less compile and minify
gulp.task('less', function () {
    gulp.src('source/less/style.less')
        .pipe(less())
        .pipe(autoprefixer({
            browsers: ['last 3 version'],
            cascade: false
        }))
        .pipe(minifyCSS())
        .pipe(concat('public/style.css'))
        .pipe(gulp.dest('.'))
        .pipe(reload({stream: true}));
});

gulp.task('build', function () {
    var appFiles = glob.sync('source/js/front/**/*.js');
    return browserify(
        {
            entries: appFiles,
            extensions: ['.js'],
            debug: true})
        .transform("babelify", {presets:['es2015', "stage-2",'react']})
        .bundle()
        .pipe(source('public/bundle.js'))
        .pipe(gulp.dest('.'))
        .pipe(reload({stream:true}));

});
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: "./public_html/"
        },
        port: 8080,
        open: true,
        notify: true,
        livereload: true,
    });
});

// start task gulp watch
gulp.task('default', function() {
    gulp.start('less');
    gulp.start('build');
    gulp.start('browserSync');
    gulp.watch('source/js/front/**/*.js', ['build']);
    gulp.watch('source/less/**/*.less', ['less']);
});
