import { autoinject } from 'aurelia-framework';
import { MessageService } from 'app-services';
import { Hero, HeroDataService } from 'model';

@autoinject
export class DashboardComponent {

  heroes: Hero[] = [];

  constructor(private dataService: HeroDataService,
    private messageService: MessageService) { }

  bind(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.dataService
        .getHeroes()
        .then(result => this.heroes = result.slice(1, 5))
        .then(() => this.messageService.publish('HeroService: fetched heroes'))
        .catch(error => this.messageService.publish(error.toString()));
  }
} 
