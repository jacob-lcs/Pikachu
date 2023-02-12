import { Application, utils, Ticker, Container, Text } from 'pixi.js';
import type { IApplicationOptions, TextStyle } from 'pixi.js';
import { isNil } from 'lodash-es';

const ticker = Ticker.shared;
ticker.autoStart = false;

export interface IConfig {
  elementList: IElement[];
}

export interface ITextElement {
  type: IElementType.Text;
  content: string;
  property?: Partial<TextStyle>;
  animationList: IAnimation[];
}

export type IElement = ITextElement;

export enum IElementType {
  /** 文字 */
  Text
}

export interface IAnimation {
  /** 动画开始时的属性 */
  start: ITextAnimationProperty;
  /** 动画结束时的属性 */
  end: ITextAnimationProperty;
}

// export interface ITextProperty extends TextStyle Exclude {
//   color?: string;
// }

// export type ITextProperty = Exclude<TextStyle>

export interface ITextAnimationProperty extends ICommonAnimationProperty {
  /** 字体大小 */
  fontSize?: number;
}

export interface ICommonAnimationProperty {
  /** x 坐标，以屏幕中心为原点 */
  x?: number;
  /** y 坐标，以屏幕中心为原点 */
  y?: number;
  /** 缩放比例 */
  zoom?: number;
  /** 动画开始/结束时间，单位：ms */
  time: number;
}

export interface IPikachuOptions extends IApplicationOptions {
  /**
   * 展示动画的 DOM ID
   */
  domId: string;
}

export class Pikachu {
  /** Pixi 实例 */
  private readonly PixiInstance: Application | undefined;
  /** Pixi 配置 */
  private readonly config: IPikachuOptions | undefined;
  constructor(config: IPikachuOptions) {
    this.PixiInstance = new Application({
      antialias: true,
      resolution: 2,
      autoDensity: true,
      forceCanvas: !utils.isWebGLSupported(),
      ...config
    });
    this.config = config;
  }

  private calCoordinates(x: number, y: number) {
    const { width = 800, height = 600 } = this.config || {};
    return [width / 2 + x, height / 2 + y];
  }

  render(config: IConfig) {
    if (!this.config || !this.PixiInstance) return;
    const dom = document.getElementById(this.config.domId);
    if (!dom) return;
    ticker.start();
    dom.innerHTML = '';
    dom.appendChild(this.PixiInstance.view as unknown as Node);

    const container = new Container();
    this.PixiInstance.stage.addChild(container);

    config.elementList.forEach((element) => {
      const basicText = new Text(element.content, element.property);
      element.animationList.forEach((animation) => {
        const [startX, startY] = this.calCoordinates(animation.start?.x ?? 0, animation.start?.y ?? 0);
        const [endX, endY] = this.calCoordinates(animation.end?.x ?? 0, animation.end?.y ?? 0);
        const duration = animation.end.time - animation.start.time;

        if (
          !isNil(animation.start?.x) &&
          !isNil(animation.start?.y) &&
          !isNil(animation.end?.x) &&
          !isNil(animation.end?.y)
        ) {
          basicText.x = startX;
          basicText.y = startY;
        }
        if (!isNil(animation.start.zoom) && !isNil(animation.end.zoom)) {
          basicText.scale = {
            x: animation.start.zoom ?? 1,
            y: animation.end.zoom ?? 1
          };
        }

        const run = () => {
          // 如果当前时间超出了动画的时间范围，则退出
          if (
            ticker.lastTime &&
            (ticker.lastTime < animation.start.time || ticker.lastTime > animation.end.time)
          )
            return;
          container.removeChild(basicText);

          if (!isNil(animation.start?.x)) {
            const xStep = ((endX - startX) / duration) * ticker.elapsedMS;
            basicText.x += xStep;
          }
          if (!isNil(animation.start?.y)) {
            const yStep = ((endY - startY) / duration) * ticker.elapsedMS;
            basicText.y += yStep;
          }
          if (!isNil(animation.end.zoom)) {
            const zoomStep =
              ((animation.end.zoom ?? 1 - (animation.start.zoom ?? 1)) / duration) * ticker.elapsedMS;
            basicText.scale = {
              x: basicText.scale.x + zoomStep,
              y: basicText.scale.y + zoomStep
            };
          }
          container.addChild(basicText);
        };

        ticker.add(run);
      });
    });
  }

  /**
   * 销毁 Pixi 实例
   */
  destroy() {
    ticker.stop();
    this.PixiInstance?.destroy(true);
  }
}
