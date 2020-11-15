import { usuarioLogado } from './booleanos';

// El describe agrupa las funcinalidades
describe('Pruebas de booleanos', () => {
  // 1 parametro describe la fnciona, el segundo es el callback
  it('Debe retornar true', () => {
    const resp = usuarioLogado();
    expect(resp).toBeTruthy();
  });


});
