'use strict';

module.exports = function () {
    $.gulp.task('img:dev', function(){
        return $.gulp.src('./dev/static/img/**/*.{png,jpg,gif}')
            .pipe($.gulp.dest('./build/static/img/'));
    });

    $.gulp.task('img:build', function(){
        return $.gulp.src('./dev/static/img/**/*.{png,jpg,gif}')
            .pipe($.gp.tinypng('gwGPs4kEI8kWCCUq1DpdvcDEU9cSzA6I'))
            .pipe($.gulp.dest('./build/static/img/'));
    });
};