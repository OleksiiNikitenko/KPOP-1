import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {By} from "@angular/platform-browser";


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;



  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [FormsModule, ReactiveFormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create Persons list', () => {
    const persons = component.getAllPersons()
    expect(persons).not.toBeDefined()
  });

  // loginForm
  it('should init login form values', () => {
    const loginFormGroup = component.loginForm;
    const loginFormValues = {
      email: null,
      password: null
    }
    expect(loginFormGroup.value).toEqual(loginFormValues)
  })

  it('login email input check correct entered email', () => {
    let email = component.loginForm.controls['email'];
    email.setValue('test@mail.com');
    expect(email.errors).toBeNull();
  })

  it('login email input check invalid entered email', () => {
    let email = component.loginForm.controls['email'];

    expect(email.valid).toBeFalsy()
    expect(email.pristine).toBeTruthy()

    expect(email.errors['required']).toBeTruthy()

    email.setValue('invalidInputEmailAddress')
    expect(email.errors['email']).toBeTruthy()

    email.setValue('invalidInputEmailAddress');
    expect(email.errors).toBeTruthy();
  })

  it('login password input correct entered user password', () => {
    let password = component.loginForm.controls['password'];
    password.setValue('Qq12345678');
    expect(password.errors).toBeNull();
    expect(password.valid).toBeTruthy();
  })

  it('login password input check invalid entered password', () => {
    let password = component.loginForm.controls['password'];
    expect(password.errors['required']).toBeTruthy();
    password.setValue('some_invalid_psw');
    expect(password.errors['pattern']).toBeTruthy();
  })

  it('login form should invalid with no values', () => {
    expect(component.loginForm.invalid).not.toBeFalsy();
  })

  it('login form should valid with correct values', () => {
    let email = component.loginForm.controls['email'];
    email.setValue('someValid@mail.com');
    let password = component.loginForm.controls['password'];
    password.setValue('s0meVal1dPasswor4');
    expect(component.loginForm.valid).toBeTruthy();
  })

  it('login form should be submitted', () => {
    expect(component.loginForm.valid).toBeFalsy()
    let loginButton = fixture.debugElement.query(By.css('button'))
    expect(loginButton.nativeElement.disabled).toBeTruthy();

    let email = component.loginForm.controls['email'];
    email.setValue('someValid@mail.com');
    let password = component.loginForm.controls['password'];
    password.setValue('s0meVal1dPasswor4');
    fixture.detectChanges();
    expect(loginButton.nativeElement.disabled).toBeFalsy()

    component.login();
    fixture.detectChanges();

    expect(component.loginForm.value).toEqual({ email: null, password: null })
  })

  //registerForm
  it('should init register form values', () => {
    const registerFormGroup = component.registerForm;
    const registerFormValues = {
      name: null,
      email: null,
      password: null,
      confirm_password: null
    }
    expect(registerFormGroup.value).toEqual(registerFormValues)
  })

  it('register email input check correct entered email', () => {
    let email = component.registerForm.controls['email'];
    email.setValue('test@mail.com');
    expect(email.errors).toBeNull();
  })

  it(' register email input check invalid entered email', () => {
    let email = component.registerForm.controls['email'];

    expect(email.valid).toBeFalsy()
    expect(email.pristine).toBeTruthy()

    expect(email.errors['required']).toBeTruthy()

    email.setValue('invalidInputEmailAddress')
    expect(email.errors['email']).toBeTruthy()

    email.setValue('invalidInputEmailAddress');
    expect(email.errors).toBeTruthy();
  })

  it('register password input correct entered user password', () => {
    let password = component.registerForm.controls['password'];
    password.setValue('Qq12345678');
    expect(password.errors).toBeNull();
    expect(password.valid).toBeTruthy();
  })

  it('register password input check invalid entered password', () => {
    let password = component.registerForm.controls['password'];
    expect(password.errors['required']).toBeTruthy();
    password.setValue('some_invalid_psw');
    expect(password.errors['pattern']).toBeTruthy();
  })

  it('register confirm_password input correct entered user password', () => {
    let password = component.registerForm.controls['confirm_password'];
    password.setValue('Qq12345678');
    expect(password.errors).toBeNull();
    expect(password.valid).toBeTruthy();
  })

  it('register confirm_password input check invalid entered password', () => {
    let password = component.registerForm.controls['confirm_password'];
    expect(password.errors['required']).toBeTruthy();
    password.setValue('some_invalid_psw');
    expect(password.errors['pattern']).toBeTruthy();
  })

  it('register email input check correct entered name', () => {
    let email = component.registerForm.controls['name'];
    email.setValue('SomeValidName');
    expect(email.errors).toBeNull();
    expect(email.valid).toBeTruthy();
  })

  it('register password input check invalid entered name', () => {
    let password = component.registerForm.controls['name'];
    expect(password.errors['required']).toBeTruthy();
    password.setValue('n1');
    expect(password.errors['pattern']).toBeTruthy();
  })

  it('register form should invalid with no values', () => {
    expect(component.registerForm.invalid).not.toBeFalsy();
  })

  it('register form should valid with correct values', () => {
    let email = component.registerForm.controls['email'];
    email.setValue('someValid@mail.com');
    let password = component.registerForm.controls['password'];
    password.setValue('s0meVal1dPasswor4');
    let confirm_password = component.registerForm.controls['confirm_password'];
    confirm_password.setValue('s0meVal1dPasswor4');
    let name = component.registerForm.controls['name'];
    name.setValue('SomeValidName');
    expect(component.registerForm.valid).toBeTruthy();
  })

  it('register form should be submitted', () => {
    expect(component.registerForm.valid).toBeFalsy()
    let registerButton = fixture.debugElement.query(By.css('button[id="reg"]'))
    expect(registerButton.nativeElement.disabled).toBeTruthy();

    let email = component.registerForm.controls['email'];
    email.setValue('someValid@mail.com');
    let password = component.registerForm.controls['password'];
    password.setValue('s0meVal1dPasswor4');
    let confirm_password = component.registerForm.controls['confirm_password'];
    confirm_password.setValue('s0meVal1dPasswor4');
    let name = component.registerForm.controls['name'];
    name.setValue('SomeValidName');

    fixture.detectChanges();
    expect(registerButton.nativeElement.disabled).toBeFalsy()

    component.register();
    fixture.detectChanges();

    expect(component.registerForm.value).toEqual({ email: null, password: null, confirm_password: null, name: null })
  })

});
