var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var concat = require('gulp-concat');
var mocha = require('gulp-mocha');

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

gulp.task('test', () =>
	gulp.src('test.js', {read: false})
		// `gulp-mocha` needs filepaths so you can't have any plugins before it
		.pipe(mocha({reporter: 'nyan'}))
);





gulp.task('default', ['styles', 'watch']);
