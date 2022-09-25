// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'index.tsx'),
      name: 'AnimationRender',
      // the proper extensions will be added
      fileName: 'animation-render'
    },
    rollupOptions: {
      external: [
        'pixi.js',
        'react',
        'react-dom'
      ]
    }
  }
})