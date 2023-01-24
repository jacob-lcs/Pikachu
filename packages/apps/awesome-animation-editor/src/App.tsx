import { useEffect, useState } from 'react'
import { Pikachu } from '@pikachu/render'

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
            type: '',
            name: '',
            content: '11111',
            animationList: [
              {
                start: {
                  x: -100,
                  y: -100,
                  properties: {}
                },
                end: {
                  x: 100,
                  y: 100,
                  properties: {}
                },
                duration: 10000
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
