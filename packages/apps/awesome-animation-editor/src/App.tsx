import { useEffect, useState } from 'react';
import { Pikachu, IElementType } from '@pikachu/render';

function App() {
  const [pikachuInstance, setPikachuInstance] = useState<Pikachu>();

  useEffect(() => {
    setPikachuInstance(
      new Pikachu({
        background: '#1099bb',
        domId: 'animation',
        width: 375,
        height: 667,
        hello: true
      })
    );
  }, []);

  useEffect(() => {
    if (pikachuInstance) {
      pikachuInstance.render({
        elementList: [
          {
            type: IElementType.Text,
            content: '11111',
            property: {
              fill: '#e0197f',
              fontSize: '30px'
            },
            animationList: [
              {
                start: {
                  x: -100,
                  y: -100,
                  time: 5 * 1000,
                  zoom: 1
                },
                end: {
                  x: 100,
                  y: 100,
                  time: 10 * 1000,
                  zoom: 2
                }
              },
              {
                start: {
                  time: 5 * 1000,
                  zoom: 1
                },
                end: {
                  time: 10 * 1000,
                  zoom: 2
                }
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
                  time: 10 * 1000
                },
                end: {
                  x: -100,
                  y: -100,
                  time: 20 * 1000
                }
              }
            ]
          }
        ]
      });
    }
  }, [pikachuInstance]);
  return (
    <div className="App">
      <div className="w-fit h-fit" id="animation" />
    </div>
  );
}

export default App;
