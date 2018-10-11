'use strict';

global.$ = {
    path: {
      task: require('./gulp/paths/tasks.js')
    },
    gulp: require('gulp'),
    del: require('del'),
    fs: require('fs'),
    gp: require('gulp-load-plugins')(),
    browserSync: require('browser-sync').create()
};

$.path.task.forEach(function (taskPath) {
    require(taskPath) ();
});

$.gulp.task('dev', $.gulp.series(
    'clean',
    $.gulp.parallel('sass:dev','pug','libsJS:dev','scripts:dev','img:dev','svg','svg:copy','fonts')
));

$.gulp.task('build', $.gulp.series(
    'clean',
    $.gulp.parallel('sass:build','pug','libsJS:build','scripts:build','img:build','svg','svg:copy','fonts')
));

$.gulp.task('default', $.gulp.series(
    'dev',
    $.gulp.parallel(
        'watch',
        'serve'
    )
));