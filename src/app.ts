import { autoinject } from 'aurelia-framework';
import { HeroDataService } from 'model';
import { MessageService } from 'app-services';
import { Hero } from './model/hero';

@autoinject
export class App {
  
  public title = 'Tour of Heroes';
  
}
