const gulp = require('gulp')
const less = require('gulp-less')
const stylus = require('gulp-stylus')


gulp.task('build', () => {
    return gulp.src(['**/index.less', '!node_modules/**'])
        .pipe(less())
        .pipe(gulp.dest('.'))
})


gulp.task('default', () => {
    gulp.start('build')
    gulp.watch('**/*.less', ['build'])
})
