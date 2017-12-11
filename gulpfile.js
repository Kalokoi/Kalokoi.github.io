const gulp = require('gulp');
const scss = require('gulp-sass');

gulp.task('sass', function() {
  return gulp
    .src('scss/**/*.scss')
    .pipe(scss())
    .pipe(gulp.dest('css'))
});
