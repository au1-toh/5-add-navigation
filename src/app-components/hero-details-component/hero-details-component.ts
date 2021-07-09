import { autoinject } from 'aurelia-framework';
import { NavigationInstruction, Router, RouterConfiguration } from 'aurelia-router';
import { MessageService } from 'app-services';
import { Hero, HeroDataService } from 'model';

@autoinject
export class HeroDetailsComponent {

  public hero: Hero;

  constructor(private dataService: HeroDataService,
              private messageService: MessageService,
              private router: Router) {}

  activate(params: {id: string}, _routeConfig: RouterConfiguration, _navigationInstruction: NavigationInstruction): void {
    this.dataService
        .getHero(Number(params.id))
        .then(h => this.hero = h)
        .then(() => this.messageService.publish(`HeroService: fetched hero id=${this.hero.id}`))
        .catch(error => this.messageService.publish(error.toString()));
  }

  goBack(): void {
    this.router.navigateBack();
  }
  
}
