import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        federation({
            name: 'remote-app',
            filename: 'remoteEntry.js',
            exposes: {
                './RemoteApp': './src/RemoteApp.tsx',
            },
            shared: ['react', 'react-dom']
        })
    ],
    server: {
        port: 5001,
    },
    preview: {
        port: 5101,
    },
    build: {
    modulePreload: false,
        target: 'esnext',
        minify: false,
        cssCodeSplit: false
}
})
