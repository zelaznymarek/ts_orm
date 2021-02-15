import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface'

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}


@Injectable()
export class CatService {
  private readonly cats: Cat[] = [];

  create(cat: Cat): void {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }

  meowAll(): void {
    for (let cat of this.cats) {
      console.log(`${ cat.name } says ${ cat.meow() }`);
    }
  }
}
