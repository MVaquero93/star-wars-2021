import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        FormsModule,
        RouterTestingModule.withRoutes([]),
        ReactiveFormsModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    localStorage.user = {username: 'Marc'};
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validate username and password inputs as required', () => {
    const username = component.loginForm.controls.username;
    const password = component.loginForm.controls.password;

    expect(username.valid).toBeFalsy();
    expect(username.errors.required).toBeTruthy();
    expect(password.valid).toBeFalsy();
    expect(password.errors.required).toBeTruthy();
  });

  it('should validate username and password length', () => {
    const username = component.loginForm.controls.username;
    const password = component.loginForm.controls.password;

    username.setValue('te');
    password.setValue('test');
    const errors = {...username.errors, ...password.errors};
    expect(errors.required).toBeFalsy();
    expect(errors.minlength).toBeTruthy();
    expect(username.valid).toBeFalsy();
    expect(password.valid).toBeFalsy();
  });

  it('should validate correct username', () => {
    component.loginForm = formBuilder.group({
      username: 'Marc',
      password: 'asdsad'
    });
    component.loginUser()

    expect(component.unregistered).toBeTruthy();
  });

  it('should deny access with incorrect username', () => {
    component.loginForm = formBuilder.group({
      username: 'Marcos',
      password: 'asdsad'
    });
    fixture.nativeElement.querySelector('button').click();

    expect(component.unregistered).toBeFalsy();
  });
});
