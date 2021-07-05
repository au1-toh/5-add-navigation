import { Hero, HEROES } from "model";

export class HeroDataService {
  
  //constructor(/*private messageService: MessageService*/) { }

  public async getHeroes(): Promise<Hero[]> {
    //this.messageService.add('HeroService: fetched heroes');
    return new Promise<Hero[]>(resolve => {      
        resolve(HEROES);             
      });
  }
}
