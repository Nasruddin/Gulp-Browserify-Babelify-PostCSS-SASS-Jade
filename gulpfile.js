/**
 * Created by Nasir on 18-09-2015.
 */
var gulp = require('gulp'),
    jade = require('gulp-jade'),

    browserify = require('browserify'),
    babelify = require('babelify'),

    source = require('vinyl-source-stream'),
    uglify = require('gulp-uglify'),
    streamify = require('gulp-streamify'),

    sass = require('gulp-sass'),
    connect = require('gulp-connect'),

    postcss = require('gulp-postcss'),
    csswring = require('csswring'),
    autoprefixer = require('autoprefixer'),
    cssnext = require('cssnext'),
    lost = require('lost'),

    gulpif = require('gulp-if');

//Setting environment variable.
var env = process.env.NODE_ENV || 'development';
//Setting build / Output Directory
var outputDir = 'builds/development';

//HTML Task
//Transform Jade template to HTML template
gulp.task('jade', function() {
    return gulp.src('src/templates/**/*.jade')
        .pipe(jade())
        .pipe(gulp.dest(outputDir + '/views'))
        .pipe(connect.reload());
});

//JavaScript Task
//Browserify to bundle JS
//Babelify to transform from ES6 to browser readable JS
//Uglify to minify the JS files
gulp.task('js', function()  {
    return browserify('./src/js/main.js', { debug: env === 'development' })
        .transform(babelify)
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(streamify (gulpif (env === 'production', (uglify()))))
        .pipe(gulp.dest(outputDir + '/js'))
        .pipe(connect.reload());
});

//Uncomment and use incase of SASS
/*gulp.task('styles', function()  {

    var config = {};

    if(env === 'development') {
        config.sourceComments = 'map';
    }

    if(env === 'production')  {
        config.outputStyle = 'compressed';
    }

    return gulp.src('src/sass/main.scss')
        .pipe(sass(config))
        .pipe(gulp.dest(outputDir + '/css'))
        .pipe(connect.reload());
});*/

//Styles task
//postCSS for postprocessor of CSS
//CSSNext for writing future CSS syntax
gulp.task('styles', function()  {

    var processors = [
        /*csswring,*/ //Use for compressing
        autoprefixer({ browsers: ['last 2 versions'] }),
        cssnext({}),
        lost
    ]

    return gulp.src('src/css/main.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest(outputDir + '/css'))
        .pipe(connect.reload());
});

//Watch Task
gulp.task('watch', function()  {
    gulp.watch('src/templates/**/*.jade', ['jade']);
    //Incase you are using SCSS
    /*gulp.watch('src/sass/!**!/!*.scss', ['styles']);*/
    gulp.watch('src/css/**/*.css', ['styles']);
    gulp.watch('src/js/**/*.js', ['js']);
});

//Connect to listen to a port and reloading the browser with changes
gulp.task('connect', function()  {
    connect.server({
        root: [outputDir],
        port: '8000',
        livereload: true
    });
});

gulp.task('default', ['connect', 'jade', 'styles', 'js', 'watch']);