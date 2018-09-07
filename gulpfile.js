const gulp = require('gulp');
const less = require('gulp-less');
const gcmq = require('gulp-group-css-media-queries');
const cssmin = require('gulp-cssmin');
const nodemon = require('nodemon');

function less_(){
    return gulp.src('less/man.less')
    .pipe(less())
    .pipe(gulp.dest('public/css/'));
}
function css(){
    return gulp.src('public/css/man.css')
    .pipe(gcmq())
    // .pipe(cssmin())
    .pipe(gulp.dest('public/css/'))
    .pipe(gulp.dest('sait/css/'));
}
function html(){
    return gulp.src('./views/*.html')
    .pipe(gulp.dest('sait/html/'));
}
function watch (){
    nodemon({
        script: 'index.js',
        ext: 'js css',
        tasks: ['browserify']
      })
    gulp.watch('./less/*.less', gulp.series(less_,css));
    gulp.watch('./views/*.html', gulp.series(html));
}
 
const build = gulp.series(watch);
gulp.task('build', build);
gulp.task('default', build);
