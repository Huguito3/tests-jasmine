import { IncrementadorComponent } from './incrementador.component';
// Este es para pruebas unitarias;

// El describe agrupa las funcinalidades
describe('Pruebas unitarias del componente incrementador', () => {

  let component: IncrementadorComponent;
  beforeEach(() => component = new IncrementadorComponent());

  it('No debe pasar de 100 el progreso', () => {
    component.progreso = 50;
    component.cambiarValor(5);
    expect(component.progreso).toBe(55);
  });


});
