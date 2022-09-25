import * as React from 'react'
import { SpeedDial, SpeedDialAction } from '@mui/material'
import { DarkMode as DarkModeIcon, LightMode as LightModeIcon, Add as AddIcon } from '@mui/icons-material'
import { useEditorState } from '../store/editorStore'

export const SpeedOperation: React.FC = () => {
  const isDarkMode = useEditorState(state => state.isDarkMode)
  const setDarkMode = useEditorState(state => state.setDarkMode)
  return (
    <SpeedDial
      ariaLabel="Speed Operation"
      sx={{ position: 'absolute', bottom: 16, right: 16 }}
      icon={<AddIcon />}
    >
      {
        isDarkMode ? <SpeedDialAction
          icon={<LightModeIcon />}
          onClick={() => setDarkMode(false)}
          tooltipTitle={'明亮模式'}
        /> : <SpeedDialAction
          icon={<DarkModeIcon />}
          onClick={() => setDarkMode(true)}
          tooltipTitle={'暗黑模式'}
        />
      }
    </SpeedDial>
  )
}