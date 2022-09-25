import * as React from 'react'
import { useRef, useEffect, useState } from 'react'
import * as PIXI from './utils/pixi'

export const AnimationRender: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [pixiApp, setPixiApp] = useState<PIXI.Application>()

  useEffect(() => {
    if (!containerRef.current) return
    const app = new PIXI.Application({ backgroundColor: 0x1099bb, width: 800, height: 400 });
    containerRef.current.appendChild(app.view);
    setPixiApp(app)
  }, [])

  return (
    <div ref={containerRef}>
      AnimationRender
    </div>
  )
}