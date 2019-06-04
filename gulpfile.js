const { src, dest, watch, series } = require('gulp')
const less = require('gulp-less')

function build() {
    return src(['**/index.less', '!node_modules'])
        .pipe(less())
        .pipe(dest('.'))
}

function watchFiles() {
    watch(['**/index.less', '!node_modules'], build)
}

exports.default = series(build, watchFiles)
exports.build = build