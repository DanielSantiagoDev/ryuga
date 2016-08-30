var args = require('yargs').argv,
    path = require('path'),
    flip = require('css-flip'),
    through = require('through2'),
    gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    gulpsync = $.sync(gulp),
    PluginError = $.util.PluginError,
    js_obfuscator = require('gulp-js-obfuscator'),
    del = require('del');


// MAIN PATHS
var paths = {
    app: '/app/',
    markup: 'app/**/*.jade',
    styles: 'app/**/*.sass',
    scripts: 'app/**/*.js'
}

var build = {
    styles: 'dist/css/',
    markup: 'dist/html/',
    scripts: 'dist/js/'
};

// Error handler
function handleError(err) {
    log(err.toString());
    this.emit('end');
}

// JS APP
gulp.task('scripts:app', function () {
    log('Building scripts..');
    // Minify and copy all JavaScript (except vendor scripts)
    return gulp.src(paths.scripts)
        .pipe($.jsvalidate())
        .on('error', handleError)
        .pipe($.concat('app.js'))
        .pipe($.ngAnnotate())
        .on('error', handleError)
        //.pipe($.if(isProduction, $.uglify({preserveComments: 'some'})))
        //.on('error', handleError)
        //.pipe( $.if( obfuscate ,js_obfuscator({})))
        //.pipe($.if(useSourceMaps, $.sourcemaps.write()))
        .pipe(gulp.dest(build.scripts));
});

gulp.task('jade',function(){
    log('building jade');
    return gulp.src(paths.markup)
        .pipe($.jade()).on('error', handleError)
        .pipe(gulp.dest(build.markup));
})


// log to console using
function log(msg) {
    $.util.log($.util.colors.blue(msg));
}