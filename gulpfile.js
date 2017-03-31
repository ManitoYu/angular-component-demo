const gulp = require('gulp')
const templateCache = require('gulp-angular-templatecache')

gulp.task('default', function () {
  return gulp.src(['./*.html', '!index.html'])
    .pipe(templateCache({ module: 'app' }))
    .pipe(gulp.dest('.'))
})