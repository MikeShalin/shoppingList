'use strict';
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    babelify = require('babelify'),
    browserify = require('browserify'),
    browserSync = require('browser-sync'),
    reload  = browserSync.reload,
    source = require('vinyl-source-stream'),
    glob = require('glob');

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
            baseDir: "./public/"
        },
        port: 8080,
        open: true,
        notify: true,
        livereload: true,
    });
});

// start task gulp watch
gulp.task('default', function() {
    gulp.start('build');
    gulp.start('browserSync');
    gulp.watch('source/js/front/**/*.js', ['build']);
});
