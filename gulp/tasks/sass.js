'use strict';

module.exports = function () {
    $.gulp.task('sass:build', function(){
        return $.gulp.src('./dev/static/scss/main.scss')
        .pipe($.gp.sass())
        .pipe($.gp.autoprefixer ({
            browsers: ['last 3 versions']
        }))
        .pipe($.gp.csscomb())
        .pipe($.gp.csso())
        .pipe($.gulp.dest('./build/static/css'))
    });

    $.gulp.task('sass:dev', function(){
        return $.gulp.src('./dev/static/scss/main.scss')
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.sass())
            .on('error', $.gp.notify.onError({
                title: 'style'
            }))
            .pipe($.gp.autoprefixer ({
                browsers: ['last 3 versions']
            }))
            .pipe($.gp.sourcemaps.write())
            .pipe($.gulp.dest('./build/static/css'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });
};

