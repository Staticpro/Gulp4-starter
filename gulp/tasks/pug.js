'use strict';

module.exports = function () {
    $.gulp.task('pug', function(){
        return $.gulp.src('./dev/pug/pages/*.pug')
        .pipe($.gp.pug({
            locals : JSON.parse($.fs.readFileSync('./data/content.json', 'utf8')),
            pretty: true
        }))
        .on('error', $.gp.notify.onError(function (error){
             return {
                 title: 'Pug',
                 message: error.message
             };
        }))
        .pipe($.gulp.dest('./build/'))
        .on('end', $.browserSync.reload);
    });
};