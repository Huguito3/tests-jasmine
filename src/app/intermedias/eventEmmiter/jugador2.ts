import { EventEmitter } from "@angular/core";

export class Jugador2 {

  hp: number;
  hpCambia = new EventEmitter<number>();

  constructor() {
    this.hp = 100;
  }

  recibeDanho(danho: number): number {
    if (danho >= this.hp) {
      this.hp = 0;
    } else {
      this.hp = this.hp - danho;
    }
    this.hpCambia.emit(this.hp);
    return this.hp;
  }
}
