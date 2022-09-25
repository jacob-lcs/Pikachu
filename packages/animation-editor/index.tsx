import * as React from 'react'
import { useEffect } from 'react'
import { ThemeProvider, createTheme } from '@mui/material'
// import { AnimationRender } from 'animation-render'
import { useEditorState } from './store/editorStore'
import { useCurrentTheme } from './hooks/useCurrentTheme'
import { Header } from './components/Header'
import { SpeedOperation } from './components/SpeedOperation'

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
      {/* <AnimationRender /> */}
    </ThemeProvider>
  )
}