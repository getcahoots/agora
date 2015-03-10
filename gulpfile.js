/* laxcomma: true */
'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')()

gulp.task('styles', function () {
   var themes = $.filter('themes/*.css');

  return gulp.src([
    'less/style.less'
  , 'less/themes/*.less'
  ], {base: 'less'})
    .pipe($.plumber())
    .pipe($.less())
    .pipe($.autoprefixer())
    .pipe($.csso())
    .pipe(themes)
    .pipe($.rename({
      dirname: '/'
    , prefix: 'custom_'
    }))
    .pipe(themes.restore())
    .pipe(gulp.dest('design'))
    .pipe($.size({showFiles: true}));
});

gulp.task('scripts', function () {
  var dependencies = require('wiredep')()
    , source = $.filter('js/src/**/*.js');

  return gulp.src((dependencies.js || []).concat([
    'js/src/main.js'
  ]))
    .pipe($.plumber())
    .pipe($.concat('custom.js'))
    .pipe($.uglify())
    .pipe(gulp.dest('js'))
    .pipe($.size({showFiles: true}));
});

gulp.task('wiredep', function () {
  var wiredep = require('wiredep').stream;

  return gulp.src('less/**/*.less')
    .pipe(wiredep())
    .pipe(gulp.dest('less'));
});

gulp.task('default', ['styles', 'scripts']);

gulp.task('wire', function () {
    gulp.watch([
        'design/*.css',
        'js/*.js',
        'views/**/*.tpl'
    ], ['transfer']);

    gulp.watch('less/**/*.less', ['styles']);
    gulp.watch('js/src/**/*.js', ['scripts']);
    gulp.watch('bower.json', ['wiredep']);
});

gulp.task('transfer', function transfer () {
    return gulp.src(['./design/*.*', './js/**/*.js'])
        .pipe($.sftp({
            host: process.env.SFTP_HOST,
            port: process.env.SFTP_PORT,
            user: process.env.SFTP_USER,
            pass: process.env.SFTP_PASSWORD,
            remotePath: process.env.SFTP_PATH
        }));
});

gulp.task('deploy', function deploy (callback) {
    return sequence('styles', 'scripts', 'transfer', callback);
});

// Expose Gulp to external tools
module.exports = gulp;
