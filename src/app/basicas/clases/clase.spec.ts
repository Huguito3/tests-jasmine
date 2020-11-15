import { Jugador } from './clases';



// El describe agrupa las funcinalidades
describe('Pruebas de clase', () => {
  // definimos aqui para que sea para todas las pruebas del describe
  let jugador = new Jugador();
  // Ciclos de vida de las pruebas:
  // beforeAll -> Solo se ejecuta una vez antes de las pruebas
  // afterAll -> Se ejecuta despues que todas finalizan
  // beforeEach y after each, es lo mismo solo que antes y despues de cada prueba, los it.
  beforeAll(() => {
    // console.log('beforeAll');

  });
  beforeEach(() => {
    // console.log('beforeEach');
    // si no redefinimos el jugador antes de cada test, solo el primero nos va funcionar, el segundo ya seria otro valor
    jugador = new Jugador();
  });
  afterAll(() => {
    // console.log('afterAll');

  });
  afterEach(() => {
    // console.log('afterEach');

  });

  it('Debe de retornar 80 de hp si recibe 20 de danho', () => {
    // const jugador = new Jugador();
    const resp = jugador.recibeDanho(20);
    expect(resp).toBe(80);
  });

  it('Debe de retornar 50 de hp si recibe 50 de danho', () => {
    // const jugador = new Jugador();
    const resp = jugador.recibeDanho(50);
    expect(resp).toBe(50);
  });
  it('Debe de retornar 0 de hp si recibe 100 de danho o mas', () => {
    // const jugador = new Jugador();
    const resp = jugador.recibeDanho(150);
    expect(resp).toBe(0);
  });
// con al x antes del it, este no se ejecuta, lo mismo podemos hacer con el describe, ponerle la x antes
  xit('Debe de retornar 0 de hp si recibe 100 de danho o mas', () => {
    // const jugador = new Jugador();
    const resp = jugador.recibeDanho(150);
    expect(resp).toBe(0);
  });

});
