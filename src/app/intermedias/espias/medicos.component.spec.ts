import { HttpClient } from '@angular/common/http';
import { from, empty, EMPTY, throwError } from 'rxjs';
import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';


describe('MedicosComponent', () => {

  let componente: MedicosComponent;
  // llamado asi no llama el ngoninit
  const servicio = new MedicosService(null);


  beforeEach(() => {
    componente = new MedicosComponent(servicio);
  });


  it('Init: Debe de cargar los medicos', () => {
    // spyON -> HAcer peticiones falasas cuando algo sucede
    const medicos = ['medico1', 'medico2', 'medico3'];

    spyOn(servicio, 'getMedicos').and.callFake(() => {

      return from([medicos]);
    });

    componente.ngOnInit();
    expect(componente.medicos.length).toBeGreaterThan(0);
  });


  it('Init: Debe de llamar al servidor para agregar un medico', () => {
    // spyON -> HAcer peticiones falasas cuando algo sucede
    const medicos = ['medico1', 'medico2', 'medico3'];

    const espia = spyOn(servicio, 'agregarMedico').and.callFake(medico => {
      return EMPTY;
    });

    componente.agregarMedico();
    expect(espia).toHaveBeenCalled();

  });

  it('Init: Debe de agregar un nuevo medico al array ', () => {

    const medico = { id: 1, nombre: 'Hugo' };

    spyOn(servicio, 'agregarMedico').and.callFake(() => {

      return from([medico]);
    });

    componente.agregarMedico();
    expect(componente.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0);

  });


  it('Si falla la adicion la proeidad mensaje error debe ser igual al del servicio ', () => {

    const miError = 'No se pudo agregar el medico';

    spyOn(servicio, 'agregarMedico').and.returnValue(throwError(miError));

    componente.agregarMedico();
    expect(componente.mensajeError).toBe(miError);

  });

  it('Debe de llamar al servidor para borrar el medico ', () => {
    // si no colocamos esta linha al intentar ejecytar el test sale al ventana de confirmacion sde si estas seguro que quieres
    // eliminar el medico
    spyOn(window, 'confirm').and.returnValue(true);
    const espia = spyOn(servicio, 'borrarMedico').and.returnValue(EMPTY);

    componente.borrarMedico('1');
    expect(espia).toHaveBeenCalledWith('1');


  });

  it('NO Debe de llamar al servidor para borrar el medico ', () => {

    // En este caso no apreto el confirmar.
    spyOn(window, 'confirm').and.returnValue(false);
    const espia = spyOn(servicio, 'borrarMedico').and.returnValue(EMPTY);

    componente.borrarMedico('1');
    // como no confirmo, el metodo no debe de ser llamado
    expect(espia).not.toHaveBeenCalledWith('1');


  });
});
