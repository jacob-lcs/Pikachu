import { useState, useEffect } from 'react'

export const useCurrentTheme: () => 'dark' | 'light' = () => {
  const [currentTheme, setCurrentTheme] = useState<'dark' | 'light'>('light')

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    mediaChangeCallback(media)
    media.addEventListener('change', mediaChangeCallback)
  }, [])

  const mediaChangeCallback = (e: any) => {
    if (e.matches) {
      setCurrentTheme('dark')
    } else {
      setCurrentTheme('light')
    }
  }
  return currentTheme
}