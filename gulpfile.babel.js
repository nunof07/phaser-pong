import gulp from 'gulp';
import { copy } from './tasks/copy';
import { js } from './tasks/js';
import { lint } from './tasks/lint';
import { run } from './tasks/run';
import { test } from './tasks/test';
import { watch } from './tasks/watch';
import config from './gulp.config.json';

gulp.task('build', ['js', 'copy']);
gulp.task('copy', () => copy(config));
gulp.task('copy:watch', () => watch(config.paths.copy, ['copy']));
gulp.task('js', () => js(config));
gulp.task('js:watch', () => watch(config.paths.main, ['lint', 'test', 'js']));
gulp.task('lint', () => lint(config));
gulp.task('run', () => run(config));
gulp.task('test', () => test(config));
gulp.task('test:watch', () => watch(config.paths.test, ['lint', 'test']));
gulp.task('dev', ['copy:watch', 'js:watch', 'test:watch', 'run']);