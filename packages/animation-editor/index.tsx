import * as React from 'react'
import { Button } from '@mui/material'
import { AnimationRender } from 'animation-render'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export const AnimationEditor: React.FC = () => {
  return (
    <div>
      <Button>AnimationEditor</Button>
      <AnimationRender />
    </div>
  )
}