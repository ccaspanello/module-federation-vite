import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        federation({
            name: 'host-app',
            remotes: {
                remoteApp: "http://localhost:5101/assets/remoteEntry.js",
            },
            shared: ['react', 'react-dom']
        })
    ],
    server: {
        port: 5000,
    },
    preview: {
        port: 5100,
    },
    build: {
        modulePreload: false,
        target: 'esnext',
        minify: false,
        cssCodeSplit: false
    }
})
