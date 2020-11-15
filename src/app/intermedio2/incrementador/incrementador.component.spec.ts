import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';


describe('Incremendator Component', () => {

  let component: IncrementadorComponent;
  let fixture: ComponentFixture<IncrementadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncrementadorComponent],
      imports: [FormsModule]
    });

    fixture = TestBed.createComponent(IncrementadorComponent);
    component = fixture.componentInstance;

  });

  it('Debe  mostrar la leyenda', () => {

    component.leyenda = 'Progreso de carga';
    // Preicsamos avisarle a angular qeu estamos cambiando el texto, en los specs esto es no es autoamtico
    fixture.detectChanges();
    // Como esta con query va a rertornar el primero que encuentre
    const element: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;

    expect(element.innerHTML).toContain('Progreso de carga');
  });


  it('Debe de mostrar en el input el valor del progreso', () => {

    // Precisamos llamar la funciona de cambiar valor
    component.cambiarValor(5);
    // Preicsamos avisarle a angular qeu estamos cambiando.
    fixture.detectChanges();
    // el when stable, espera que se ejecute la deteccion de campos. Si no le ponemos el test va a dar
    // error porque todaia no ejecuto los cambios
    fixture.whenStable().then(
      () => {
        // Como esta con query va a rertornar el primero que encuentre
        const elem = fixture.debugElement.query(By.css('input')).nativeElement;

        console.log(elem);
        // el valor inicial era 50, le agregamos 5.
        expect(elem.value).toBe('55');
      }
    );
  });


  it('Debe de incrementar en 5, con un click en el boton', () => {

    // esto nos retorna todos los botones, en un array
    const botones = fixture.debugElement.queryAll(By.css('.btn-primary'));
    console.log(botones);
    // simulamos que hacemos click en el primer boton, en este caso resta 5 al valor inicial (50)
    botones[0].triggerEventHandler('click', null);
    expect(component.progreso).toBe(45);

    botones[1].triggerEventHandler('click', null);
    expect(component.progreso).toBe(50);

  });


  it('En el titulo del progreso debe de mostrar el valor', () => {

    // esto nos retorna todos los botones, en un array
    const botones = fixture.debugElement.queryAll(By.css('.btn-primary'));
    console.log(botones);
    // simulamos que hacemos click en el primer boton, en este caso resta 5 al valor inicial (50)
    botones[0].triggerEventHandler('click', null);
    // Preicsamos avisarle a angular qeu estamos cambiando el texto, en los specs esto es no es autoamtico
    fixture.detectChanges();
    // Como esta con query va a rertornar el primero que encuentre
    const element: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;

    expect(element.innerHTML).toContain('45');
  });



});
