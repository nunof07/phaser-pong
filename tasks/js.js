import * as rollup from 'rollup';
import gulp from 'gulp';
import rollupStream from 'rollup-stream';
import source from 'vinyl-source-stream';
import rollupConfig from '../rollup.config';

let cache;

/**
 * Build JavaScript.
 * @param {object} config 
 * @returns {NodeJS.ReadWriteStream}
 */
export function js(config) {
    const streamConfig = Object.assign(
        {},
        rollupConfig,
        {
            cache: cache,
            rollup: rollup
        }
    );

    return rollupStream(streamConfig)
        .on('error', function(e) {
            console.error(e.stack);
            this.emit('end');
        })
        .on('bundle', bundle => {
            cache = bundle;
        })
        .pipe(source(config.paths.bundle))
        .pipe(gulp.dest(config.paths.destination));
}