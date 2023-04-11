import { resolve } from 'path'
import { defineConfig } from 'vite'

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')

export default defineConfig({
    root,
    build: {
        sourcemap: true,
        outDir,
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: resolve(root, 'index.html'),
                classes: resolve(root, 'classes', 'index.html'),
                interfaces: resolve(root, 'interfaces', 'index.html'),
                generics: resolve(root, 'generics', 'index.html'),
            }
        }
    }
})
