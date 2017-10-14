var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var concat = require('gulp-concat');

gulp.task('styles', function() {
  gulp.src(['./scss/*.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe( postcss([ require('autoprefixer'), require('cssnano') ]) )
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./'))
});

gulp.task('watch', function() {
  gulp.watch(['./scss/*.scss',], ['styles']);
});

gulp.task('default', ['styles', 'watch']);
