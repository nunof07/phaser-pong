import gulp from 'gulp';
import batch from 'gulp-batch';
import plumber from 'gulp-plumber';
import sequence from 'gulp-sequence';
import gulpWatch from 'gulp-watch';

/**
 * Watch files and run tasks on change.
 * @param {string|string[]} glob 
 * @param {string[]} tasks
 * @returns {NodeJS.ReadWriteStream}
 */
export function watch(glob, tasks) {
    return gulp
        .src(glob)
        .pipe(plumber())
        .pipe(
            gulpWatch(
                glob,
                { ignoreInitial: false },
                batch(function (events, done) {
                    sequence(...tasks, done);
                })
            )
        );
}