const fs = require('fs');
const gulp = require('gulp');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const rename = require('gulp-rename');
const main = 'react-shadow-dom';

gulp.task('minify', function() {
    return gulp.src([`./${main}.js`])
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(uglify({ preserveComments: 'license' }))
        .pipe(rename(`${main}.min.js`))
        .pipe(gulp.dest('.'));
});


gulp.task('default', ['minify']);