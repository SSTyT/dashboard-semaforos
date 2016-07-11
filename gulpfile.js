var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var templateCache = require('gulp-angular-templatecache');

var paths = {
  sass: ['./app/*.scss', './app/components/**/*.scss', './www/shared/**/*.scss'],
  templates: ['./app/*.html', './app/components/**/*.html', './app/shared/**/*.html']
};

gulp.task('default', ['sass', 'template-cache', 'watch']);

gulp.task('template-cache', function() {
  return gulp.src(paths.templates)
    .pipe(templateCache({ standalone: true }))
    .pipe(gulp.dest('./app/shared'));
});

gulp.task('sass', function(done) {
  gulp.src('./app/styles.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest('./app/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./app/'))
    .on('end', done);
});

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.templates, ['template-cache']);
});
