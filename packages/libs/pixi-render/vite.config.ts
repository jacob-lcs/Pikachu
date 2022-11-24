import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'PixiRender',
      formats: ['es', 'cjs'],
      // the proper extensions will be added
      fileName: 'pixi-render'
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['react', 'pixi.js'],
      output: {
        sourcemap: true
      }
    }
  }
})
