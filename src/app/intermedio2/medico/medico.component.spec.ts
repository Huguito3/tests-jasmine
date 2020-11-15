import { MedicoService } from './medico.service';
import { MedicoComponent } from './medico.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';





describe('Medico Component', () => {
  let componente: MedicoComponent;
  //Component fixture permite la manipulacin del dom para el html
  let fixture: ComponentFixture<MedicoComponent>;

  beforeEach(() => {

    // en las pruebas de integracion, no instanciamos la clase directamente, precisamos que
    // angular crie el documento con sus ciclos de vida, y todo lo que forma um componente.. html, css etc
    // Temos que confgurar todo o que comonente e seus serviços utilizan
    TestBed.configureTestingModule({
      declarations: [MedicoComponent],
      providers: [MedicoService],
      imports: [HttpClientModule]
    });

    fixture = TestBed.createComponent(MedicoComponent);
    componente = fixture.componentInstance;
  });

  it('Debe de crearse el componente', () => {
    expect(componente).toBeTruthy();
  });

  it('Debe de retoranr el nombre del medico', () => {
    const nombre = 'Hugo';
    const res = componente.saludarMedico(nombre);
    expect(res).toContain(nombre);
  });

});
