import * as React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { useEditorState } from './store/editorStore'
import { useCurrentTheme } from './hooks/useCurrentTheme'
import { Header } from './components/Header'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export const AnimationEditor: React.FC = () => {
  const state = useEditorState(state => state)
  const currentTheme = useCurrentTheme()
  
  const darkTheme = createTheme({
    palette: {
      mode: currentTheme
    }
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <Header />
    </ThemeProvider>
  )
}