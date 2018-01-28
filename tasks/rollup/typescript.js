import rollupTypescript from 'rollup-plugin-typescript2';
import typescriptModule from 'typescript';

export const typescript = rollupTypescript({
    typescript: typescriptModule
});