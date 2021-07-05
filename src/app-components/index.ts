import {FrameworkConfiguration, PLATFORM } from 'aurelia-framework';

export function configure(config: FrameworkConfiguration): void {
  config.globalResources([
    PLATFORM.moduleName('./hero-details-component/hero-details-component.html'),
    PLATFORM.moduleName('./heroes-component/heroes-component'),
    PLATFORM.moduleName('./messages-component/messages-component')
  ]);
}
