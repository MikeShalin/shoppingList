'use strict';
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    babelify = require('babelify'),
    browserify = require('browserify'),
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
        .pipe(gulp.dest('.'));
        // .pipe(reload({stream:true}));

});

// start task gulp watch
gulp.task('default', function() {
    gulp.start('build');
    gulp.watch('source/js/front/**/*.js', ['build']);
});
