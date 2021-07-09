import { Hero, HEROES } from "model";

export class HeroDataService {
  
  public async getHeroes(): Promise<Hero[]> {
    return new Promise<Hero[]>(resolve => {      
        resolve(HEROES);             
      });
  }

  public async getHero(id: number): Promise<Hero> {
    return new Promise<Hero>(resolve => {      
        resolve(HEROES.find(h => h.id === id));             
      });
  }
}
