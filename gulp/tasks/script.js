'use strict';

module.exports = function () {
    $.gulp.task('libsJS:dev', function(){
        return $.gulp.src(['node_modules/jquery/dist/jquery.min.js',
            'node_modules/slick-carousel/slick/slick.min.js',
            'node_modules/svg4everybody/dist/svg4everybody.min.js'])
            .pipe($.gp.concat('libs.min.js'))
            .pipe($.gulp.dest('./build/static/js'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });

    $.gulp.task('libsJS:build', function(){
        return $.gulp.src(['node_modules/jquery/dist/jquery.min.js',
            'node_modules/slick-carousel/slick/slick.min.js',
            'node_modules/svg4everybody/dist/svg4everybody.min.js'])
            .pipe($.gp.concat('libs.min.js'))
            .pipe($.gp.uglifyjs())
            .pipe($.gulp.dest('./build/static/js'))
    });

    $.gulp.task('scripts:dev', function(){
        return $.gulp.src('./dev/static/js/main.js')
            .pipe($.gulp.dest('./build/static/js'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });

    $.gulp.task('scripts:build', function(){
        return $.gulp.src('./dev/static/js/main.js')
            .pipe($.gp.uglifyjs())
            .pipe($.gulp.dest('./build/static/js'))
    });
};