// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'index.tsx'),
      name: 'AnimationEditor',
      // the proper extensions will be added
      fileName: 'animation-editor'
    },
    rollupOptions: {
      external: ['@emotion/react', '@emotion/styled', '@fontsource/roboto', '@mui/icons-material', '@mui/material', 'animation-render', 'zustand', 'react', 'react-dom']
    }
  }
})