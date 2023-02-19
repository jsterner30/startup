import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';

export default {
    input: "main.js",
    output: {
        file: "build/bundle.js",
        format: "iife",
        sourcemap: true,
        name: 'bundle'
    },
    plugins: [
        nodeResolve({
            extensions: [".js"],
        }),
        replace({
            'process.env.NODE_ENV': JSON.stringify( 'development' )
        }),
        commonjs(),
        serve({
            open: true,
            verbose: true,
            contentBase: ["", "public"],
            host: "localhost",
            port: 3000,
        }),
        livereload({ watch: "build" }),
    ]
};