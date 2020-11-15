import { ActivatedRoute, Router } from '@angular/router';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterMedicoComponent } from './router-medico.component';
import { EMPTY, Observable, Subject } from 'rxjs';

// me creo una classe fake del router. Solo el, navigate me interesa probar en este caso
class FakeRouter {
  navigate(params) { }
}
class FakeAcivatedRouter {
  // params: Observable<any> = EMPTY;
  private subject = new Subject();
  push(valor) {
    this.subject.next(valor);
  }
  get params() {
    return this.subject.asObservable();
  }
}


describe('RouterMedicoComponent', () => {
  let component: RouterMedicoComponent;
  let fixture: ComponentFixture<RouterMedicoComponent>;



  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RouterMedicoComponent],
      // Aca sustituimos la clase del router por nuestra fake
      providers: [{ provide: Router, useClass: FakeRouter },
      { provide: ActivatedRoute, useClass: FakeAcivatedRouter }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('Debe de redirecion a medico cuando se guarde', () => {

    const router = TestBed.get(Router);
    const spy = spyOn(router, 'navigate');
    component.guardarMedicos();
    expect(spy).toHaveBeenCalledWith(['medico', '123']);
  });

  it('Debe de colocar el id = nuevo', () => {

    component = fixture.componentInstance;
    const activatedRoute = TestBed.get(ActivatedRoute);
    activatedRoute.push({ id: 'nuevo' });

    expect(component.id).toBe('nuevo');

  });

});
