const gulp = require('gulp');
const stylus = require('gulp-stylus');
const pug = require('gulp-pug');
const autoprfixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const babel = require('gulp-babel');

const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const browserSync = require('browser-sync');
const concat = require('gulp-concat');
const uglify = require('uglify-js-es6').default;
const cache = require('gulp-cache');
const pngquant = require('imagemin-pngquant');
const imagemin = require('gulp-imagemin');
const livereload = require('gulp-livereload')

let postplugins = [autoprfixer];

/**
 * task for livereload page in browser
 */
gulp.task('browser-sync', () => {
    browserSync({
        server: {
            baseDir: 'public'
        },
        notify: false
    })
});

/**
 * task for processing .styl files
 */
gulp.task('styles', () => {
    return gulp.src('./source/assets/styles/main.styl')
        .pipe(stylus())
        .pipe(postcss(postplugins))
        .pipe(gulp.dest('./public/assets/css'))
});

/**
 * task for processing .pug files
 */
gulp.task('pages', () => {
    return gulp.src('./source/pages/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('./public'))
});

/**
 * task for processing .js files
 */
gulp.task('scripts', () => {
    return gulp.src(['./source/assets/js/*.js', './source/blocks/**/*.js', ,
        ])
        .pipe(concat('libs.min.js'))
        .pipe(gulp.dest('./public/assets/js'))
});
/**
 * task for images
 */
gulp.task('images', () => {
    return gulp.src('./source/assets/images/*')
        .pipe(cache(imagemin({
            interlaced: true,
            progressive: true,
            svgoPlugins: [{
                removeViewBox: false
            }],
            une: [pngquant]
        })))
        .pipe(gulp.dest('./public/assets/images'))
});

gulp.task('fonts', () => {
    return gulp.src(['./bower_components/font-awesome/**/*', ])
        .pipe(gulp.dest('./public/assets/fonts'))
});


gulp.task('watch', ['browser-sync', 'pages', 'styles', 'scripts', 'images', 'fonts',], () => {
    gulp.watch(['./source/**/*.styl', './source/styles/*.styl'], ['styles', browserSync.reload]);
    gulp.watch('./source/blocks/**/*.pug', ['pages', browserSync.reload]);
    gulp.watch('./source//blocks/**/*.js', ['scripts', browserSync.reload]);
    gulp.watch('./source/assets/images/*', ['images']);
});

gulp.task('default', ['pages', 'styles', 'images', 'fonts', 'scripts', 'watch']);
