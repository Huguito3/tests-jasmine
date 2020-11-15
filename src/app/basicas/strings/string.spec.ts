import { mensaje } from './string';

// El describe agrupa las funcinalidades
describe('Pruebas de strings', () => {
  // 1 parametro describe la fnciona, el segundo es el callback
  it('Debe retornar un string', () => {
    const resp = mensaje('Hugo');
// Pueden ser multiples dentro del mismo it.
    expect(typeof resp).toBe('string');
  });

  it('Debe retornar un un saludo con el nombre enviado', () => {
    const resp = mensaje('Hugo');
    expect(resp).toBe('Saludos Hugo');
  });

  it('Se espera que contenga el nombre en la respuesta', () => {
    const nombre = 'Hugo';
    const resp = mensaje(nombre);
    expect(resp).toContain(nombre);
  });
});
