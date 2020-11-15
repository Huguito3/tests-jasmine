import { FormBuilder } from '@angular/forms';
import { FormularioRegister } from './formulario';




describe('Pruebas de Formularios', () => {
  let componente: FormularioRegister;

  beforeEach(() => {
    componente = new FormularioRegister(new FormBuilder());
  });

  it('Debe crear un formulario con dos campos', () => {

    expect(componente.form.contains('email')).toBeTruthy();
    expect(componente.form.contains('password')).toBeTruthy();

  });

  it('El email debe ser obligatorio', () => {

    const control = componente.form.get('email');
    control.setValue('');

    expect(control.valid).toBeFalsy();

  });


  it('El email debe ser un correo valido', () => {

    const control = componente.form.get('email');
    control.setValue('huguito@');

    expect(control.valid).toBeFalsy();

  });
  it('El email debe ser un correo valido 2', () => {

    const control = componente.form.get('email');
    control.setValue('huguito@gmail.com');

    expect(control.valid).toBeTruthy();

  });
});
