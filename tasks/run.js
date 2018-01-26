import gulp from 'gulp';
import connect from 'gulp-connect';
import open from 'gulp-open';

/**
 * Start server.
 * @param {object} config 
 * @returns {NodeJS.ReadWriteStream}
 */
export function run(config) {
    const server = connect.server({
        root: [config.paths.destination],
        livereload: true
    });

    return gulp.src('./')
        .pipe(open({
            uri: 'http://' + server.host + ':' + server.port
        }));
}