import { MessageService } from 'app-services';
import { autoinject } from 'aurelia-framework';
import { Hero, HeroDataService } from 'model';


@autoinject
export class HeroesComponent {

  public heroes: Hero[] = [];
  public selectedHero?: Hero;

  constructor(private dataService: HeroDataService,
              private messageService: MessageService) {}

  protected bind(_bindingContext: unknown, _overrideContext: unknown): void {
    this.dataService
        .getHeroes()
        .then(result => this.heroes = result)
        .then(() => this.messageService.publish('HeroService: fetched heroes'))
        .catch(error => this.messageService.publish(error.toString()));
  }    
  
  protected onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.publish(`HeroesComponent: Selected hero id=${hero.id}`);
  }
}
