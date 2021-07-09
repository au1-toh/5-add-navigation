import { autoinject, PLATFORM } from 'aurelia-framework';
import { RouterConfiguration, Router } from 'aurelia-router';

@autoinject
export class App {
  
  public title = 'Tour of Heroes';
  
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router): void {

    this.router = router;
    
    config.title = 'Tour of Heroes';
    // config.options.pushState = true;
    // config.options.root = '/';
    
    config.map([
      { route: ['', 'dashboard'], name: 'dashboard',  moduleId: PLATFORM.moduleName('app-components/dashboard-component/dashboard-component'), nav: true, title: 'Dashboard' },
      { route: 'heroes', name: 'heroes',  moduleId: PLATFORM.moduleName('app-components/heroes-component/heroes-component'), nav: true, title: 'Heroes' },
      { route: 'details/:id', name: 'details', moduleId: PLATFORM.moduleName('app-components/hero-details-component/hero-details-component'), title: 'Hero Details' }
    ]);
  }

}
