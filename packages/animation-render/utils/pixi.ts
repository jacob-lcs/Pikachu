import '@pixi/extensions'
import * as utils from '@pixi/utils';
export * from '@pixi/constants';
export * from '@pixi/math';
export * from '@pixi/runner';
export * from '@pixi/settings';
export * from '@pixi/ticker';
export * from '@pixi/app';
export * from '@pixi/loaders';
export * from '@pixi/text';
export { utils };
export * from '@pixi/core';

// Renderer plugins
import { extensions, BatchRenderer } from '@pixi/core';
import { TickerPlugin } from '@pixi/ticker';
import { AppLoaderPlugin } from '@pixi/loaders';

extensions.add(BatchRenderer, TickerPlugin, AppLoaderPlugin)