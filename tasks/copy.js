import gulp from 'gulp';

/**
 * Copy files to destination.
 * @param {object} config 
 * @returns {NodeJS.ReadWriteStream}
 */
export function copy(config) {
    return gulp.src(config.paths.copy)
        .pipe(gulp.dest(config.paths.destination));
}