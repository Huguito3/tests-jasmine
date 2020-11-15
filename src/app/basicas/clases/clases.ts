import { domainToASCII } from "url";

export class Jugador {

  hp: number;

  constructor() {
    this.hp = 100;
  }

  recibeDanho(danho: number): number {
    if (danho >= this.hp) {
      this.hp = 0;
    } else {
      this.hp = this.hp - danho;
    }

    return this.hp;
  }
}
