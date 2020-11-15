import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { RouterLinkWithHref, RouterOutlet } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        RouterTestingModule.withRoutes([])
      ], schemas: [NO_ERRORS_SCHEMA]
      // el no erros sche,a es apra ignorar lo que no conoce
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('Debe de tener un router-Outlet', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const debugelement = fixture.debugElement.query(By.directive(RouterOutlet));

    expect(debugelement).not.toBeNull();
  });


  xit('Debe de tener un link a la pagina de medicos', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const debugelement = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    let existe = false;

    for (const element of debugelement) {
      if (element.attributes['routerLink'] === '/medicos') {
        existe = true;
        break;
      }
    }

    expect(existe).toBeTruthy();

  });
});
