/* laxcomma: true */
'use strict';

var path = require('path');

var gulp = require('gulp');
var $ = require('gulp-load-plugins')()

var sequence = require('run-sequence');

function trans (dir) {
    return $.scp2({
        host: process.env.SFTP_HOST,
        port: process.env.SFTP_PORT,
        username: process.env.SFTP_USER,
        password: process.env.SFTP_PASSWORD,
        dest: path.join(process.env.SFTP_PATH, dir)
    });
}

gulp.task('styles', function () {

  return gulp.src([
    'less/style.less'
  ], {base: 'less'})
    .pipe($.plumber())
    .pipe($.less())
    .pipe($.autoprefixer())
    .pipe($.csso())
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

gulp.task('transfer-views', function () {
    return gulp.src(['./views/*.tpl']).pipe(trans('/views/'));
});

gulp.task('transfer-styles', function () {
    return gulp.src(['./design/*.css']).pipe(trans('/design/'));
});

gulp.task('transfer-assets', function () {
    return gulp.src(['./about.php']).pipe(trans('/'));
});


gulp.task('transfer', function transfer (callback) {
    return sequence('transfer-styles', 'transfer-assets', 'transfer-views', callback);
});

gulp.task('deploy', function deploy (callback) {
    return sequence('styles', 'scripts', 'transfer', callback);
});

// Expose Gulp to external tools
module.exports = gulp;
