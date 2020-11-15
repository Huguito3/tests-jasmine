import { Jugador2 } from './jugador2';



// El describe agrupa las funcinalidades
describe('Pruebas de clase Jugador 2', () => {
  // definimos aqui para que sea para todas las pruebas del describe
  let jugador: Jugador2;

  // se ejecutara antes de cada it
  beforeEach(() => {
    jugador = new Jugador2();
  });

  it('Debe de emitir un evento cuando recibe danho', () => {

    let nuevoHp = 0;
    jugador.hpCambia.subscribe(hp => {
      nuevoHp = hp;
    });

    jugador.recibeDanho(10000);

    expect(nuevoHp).toBe(0);

  });

  it('Debe de emitir un evento cuando recibe danho', () => {

    let nuevoHp = 0;
    jugador.hpCambia.subscribe(hp => {
      nuevoHp = hp;
    });

    jugador.recibeDanho(50);

    expect(nuevoHp).toBe(50);

  });



});
