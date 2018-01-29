import path from 'path';
import { babel } from './tasks/rollup/babel';
import { commonjs } from './tasks/rollup/commonjs';
import { nodeResolve } from './tasks/rollup/nodeResolve';
import { typescript } from './tasks/rollup/typescript';
import { uglify } from './tasks/rollup/uglify';
import config from './gulp.config.json';

export default {
    external: config.rollup.external,
    input: config.paths.entry,
    output: {
        file: path.join(config.paths.destination, config.paths.bundle),
        format: config.rollup.format,
        name: config.rollup.name,
        sourcemap: false,
        globals: config.rollup.globals,
    },
    plugins: [
        commonjs,
        nodeResolve,
        typescript,
        babel,
        uglify,
    ],
    watch: {
        clearScreen: false
    }
};