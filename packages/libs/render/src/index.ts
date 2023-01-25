import { Application, utils, Ticker, Container, Text } from 'pixi.js';
import type { IApplicationOptions } from 'pixi.js';

const ticker = Ticker.shared;

export interface IConfig {
  elementList: IElement[];
}

export interface ITextElement {
  type: IElementType.Text;
  content: string;
  animationList: IAnimation[];
}

export type IElement = ITextElement;

export enum IElementType {
  Text
}

export interface IAnimation {
  start: IProperty;
  end: IProperty;
  /**
   * animation duration (ms)
   */
  duration: number;
}

export interface IProperty {
  x: number;
  y: number;
}

export interface IPikachuOptions extends IApplicationOptions {
  /**
   * 展示动画的 DOM ID
   */
  domId: string;
}

export class Pikachu {
  #PixiInstance: Application | undefined;
  #config: IPikachuOptions | undefined;
  constructor(config: IPikachuOptions) {
    this.#PixiInstance = new Application({
      antialias: true,
      resolution: 2,
      autoDensity: true,
      forceCanvas: !utils.isWebGLSupported(),
      ...config
    });
    this.#config = config;
  }

  #calCoordinates(x: number, y: number) {
    const { width = 800, height = 600 } = this.#config || {};
    return [width / 2 + x, height / 2 + y];
  }

  render(config: IConfig) {
    if (!this.#config || !this.#PixiInstance) return;
    const dom = document.getElementById(this.#config.domId);
    if (!dom) return;
    dom.innerHTML = '';
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    dom.appendChild(this.#PixiInstance.view);

    const container = new Container();
    this.#PixiInstance.stage.addChild(container);

    config.elementList.forEach((element) => {
      const basicText = new Text(element.content);
      element.animationList.forEach((animation) => {
        const [startX, startY] = this.#calCoordinates(animation.start.x, animation.start.y);
        const [endX, endY] = this.#calCoordinates(animation.end.x, animation.end.y);
        const xStep = (endX - startX) / animation.duration;
        const yStep = (endY - startY) / animation.duration;
        basicText.x = startX;
        basicText.y = startY;

        const run = () => {
          if ((endX >= startX && basicText.x >= endX) || (endX <= startX && basicText.x <= endX))
            ticker.remove(run);
          if ((endY >= startY && basicText.y >= endY) || (endY <= startY && basicText.y <= endY))
            ticker.remove(run);
          container.removeChild(basicText);
          basicText.x += xStep;
          basicText.y += yStep;
          container.addChild(basicText);
        };

        ticker.add(run);
      });
    });
  }
}
