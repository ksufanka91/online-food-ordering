import react from '@vitejs/plugin-react';
import {defineConfig} from 'vite'
import {fileURLToPath, URL} from "url";
import svgr from "vite-plugin-svgr";
import checker from "vite-plugin-checker";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        svgr(),
        checker({
            typescript: true,
        })
    ],
    resolve: {
        alias: [
            {find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url))},
            {find: '@icons', replacement: fileURLToPath(new URL('./src/icons', import.meta.url))},
            {find: '@utils', replacement: fileURLToPath(new URL('./src/utils', import.meta.url))},
        ]
    }
})
