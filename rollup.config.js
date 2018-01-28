import path from 'path';
import { babel } from './tasks/rollup/babel';
import { typescript } from './tasks/rollup/typescript';
import { uglify } from './tasks/rollup/uglify';
import config from './gulp.config.json';

export default {
    input: config.paths.entry,
    output: {
        file: path.join(config.paths.destination, config.paths.bundle),
        format: config.rollup.format,
        name: config.rollup.name,
        sourcemap: false
    },
    plugins: [
        typescript,
        babel,
        uglify,
    ],
    watch: {
        clearScreen: false
    }
};