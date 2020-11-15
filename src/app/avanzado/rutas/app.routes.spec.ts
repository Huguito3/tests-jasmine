import { MedicoComponent } from 'src/app/intermedio2/medico/medico.component';
import { RUTAS } from './app.routes';


// El describe agrupa las funcinalidades
describe('Rutas Principales', () => {
  // 1 parametro describe la fnciona, el segundo es el callback
  it('Debe existir la ruta /medico/:id', () => {

    expect(RUTAS).toContain({ path: 'medico/:id', component: MedicoComponent });
  });



});
