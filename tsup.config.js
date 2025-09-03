import { defineConfig } from 'tsup';

export default defineConfig([
    {
        entry: [ 'src/**/*.ts' ],
        format: 'esm',
        outDir: 'dist/esm',
        sourcemap: true,
        clean: true,
        dts: false,
        outExtension: () => ({ js: '.js' }),
        esbuildOptions(options) {
            options.outbase = 'src';
        }
    },
    {
        entry: [ 'src/**/*.ts' ],
        format: 'cjs',
        outDir: 'dist/cjs',
        sourcemap: true,
        clean: false,
        dts: false,
        outExtension: () => ({ js: '.js' }),
        esbuildOptions(options) {
            options.outbase = 'src';
        }
    }
]);