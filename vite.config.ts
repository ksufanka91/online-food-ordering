import {defineConfig} from 'vite'
import {fileURLToPath, URL} from "url";
import react from '@vitejs/plugin-react'
import checker from "vite-plugin-checker";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        checker({
            typescript: true,
        })
    ],
    resolve: {
        alias: [
            {find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url))},
        ]
    }
})
