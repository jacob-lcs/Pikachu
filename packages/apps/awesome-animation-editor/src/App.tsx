import { useEffect, useState } from 'react'
import { Pikachu, IElementType } from '@pikachu/render'

function App() {
  const [pikachuInstance, setPikachuInstance] = useState<Pikachu>()

  useEffect(() => {
    setPikachuInstance(new Pikachu({
      background: '#1099bb',
      domId: 'animation',
      width: 375,
      height: 667,
      hello: true
    }))
  }, [])

  useEffect(() => {
    if (pikachuInstance) {
      pikachuInstance.render({
        elementList: [
          {
            type: IElementType.Text,
            content: '11111',
            animationList: [
              {
                start: {
                  x: -100,
                  y: -100,
                },
                end: {
                  x: 100,
                  y: 100,
                },
                duration: 1000
              }
            ]
          },
          {
            type: IElementType.Text,
            content: '2222',
            animationList: [
              {
                start: {
                  x: 100,
                  y: 100,
                },
                end: {
                  x: -100,
                  y: -100,
                },
                duration: 500
              }
            ]
          }
        ]
      })
    }
  }, [pikachuInstance])
  return (
    <div className="App">
      <div className="w-fit h-fit" id='animation' />
    </div>
  )
}

export default App
