import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from "rollup-plugin-visualizer"

const isNeedVisualizer = process.env.ANALYZE === '1'

export default defineConfig({
  plugins: [react({
    jsxRuntime: 'classic',
  }), isNeedVisualizer && visualizer()].filter(Boolean),
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/index.tsx'),
      name: 'PixiEditor',
      formats: ['es', 'cjs'],
      // the proper extensions will be added
      fileName: 'pixi-editor'
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['react', 'antd', 'zustand', 'lodash-es'],
    }
  }
})
