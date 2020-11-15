import { obtenerRobots } from './arreglos';

// El describe agrupa las funcinalidades
describe('Pruebas de arreglos', () => {
  // 1 parametro describe la fnciona, el segundo es el callback
  it('Debe retornar tres robots', () => {
    const resp = obtenerRobots();

    expect(resp.length).toBeGreaterThanOrEqual(3);
  });

  it('Debe existir Megaman y Robocop', () => {
    const resp = obtenerRobots();

    expect(resp).toContain('Megaman');
    expect(resp).toContain('Robocop');
  });

});
