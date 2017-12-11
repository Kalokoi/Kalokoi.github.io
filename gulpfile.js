const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', function() {
  return gulp
    .src('scss/**/*.scss')
    .pipe(scss())
    .pipe(gulp.dest('css'))
});
