import { incrementar } from './numeros';

// El describe agrupa las funcinalidades
describe('Pruebas de numeros', () => {
  // 1 parametro describe la fnciona, el segundo es el callback
  it('Debe retornar 100, si el numero ingreaso es mayor a 100', () => {
    const resp = incrementar(101);
    expect(resp).toBe(100);
  });

  it('Debe retornar el numero incrementado en 1 si fuera menor a 100', () => {
    const numero = 50;
    const resp = incrementar(numero);
    expect(resp).toBe(numero + 1);
  });

});
