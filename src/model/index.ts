export * from './hero';
import {FrameworkConfiguration, PLATFORM } from 'aurelia-framework';

export * from './hero-data-service';
export * from './mock-heroes';

export function configure(config: FrameworkConfiguration): void {
  config.globalResources([]);
}
