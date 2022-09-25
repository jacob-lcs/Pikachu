import * as React from 'react'
import { AppBar, Tooltip, Container, Toolbar, Typography, Box, IconButton } from '@mui/material'
import { AddPhotoAlternate as AddPhotoAlternateIcon, AutoAwesomeMotion as AutoAwesomeMotionIcon, AutoFixHigh as AutoFixHighIcon, TextFormat as TextFormatIcon } from '@mui/icons-material'

export const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AutoFixHighIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
            }}
          >
            NICE
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
            <Tooltip title="添加文本">
              <IconButton aria-label="text">
                <TextFormatIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="添加图片">
              <IconButton aria-label="image">
                <AddPhotoAlternateIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="添加序列帧">
              <IconButton aria-label="animation">
                <AutoAwesomeMotionIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}