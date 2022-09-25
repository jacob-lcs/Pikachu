import * as React from 'react'
import { useEffect } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { useEditorState } from './store/editorStore'
import { useCurrentTheme } from './hooks/useCurrentTheme'
import { Header } from './components/Header'
import { SpeedOperation } from './components/SpeedOperation'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export const AnimationEditor: React.FC = () => {
  const isDarkMode = useEditorState(state => state.isDarkMode)
  const setDarkMode = useEditorState(state => state.setDarkMode)
  const currentTheme = useCurrentTheme()

  useEffect(() => {
    setDarkMode(currentTheme === 'dark')
  }, [currentTheme])
  
  const darkTheme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light'
    }
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <Header />
      <SpeedOperation />
    </ThemeProvider>
  )
}