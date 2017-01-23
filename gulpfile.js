import gulp from 'gulp'
import browserify from 'browserify'
const autoprefixer = require('gulp-autoprefixer');
const uglify = require("gulp-uglify");
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require("browser-sync").create();
const babelify = require("babelify");
const source = require("vinyl-source-stream");
const buffer = require("vinyl-buffer");
const del = require("del");
import server from './server'

gulp.task("default", function () {
        var b = browserify({
            entries: './js/Index.jsx',
            debug: true,
            transform: [reactify]
        });

        return b.bundle()
            .pipe(source('./bundle.js'))
            .pipe(buffer())
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest('./js'));
});