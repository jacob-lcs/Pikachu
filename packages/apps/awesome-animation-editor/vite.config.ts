import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from "rollup-plugin-visualizer";

const isNeedVisualizer = process.env.ANALYZE === '1'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    jsxRuntime: 'classic',
  }), isNeedVisualizer && visualizer()].filter(Boolean)
})
