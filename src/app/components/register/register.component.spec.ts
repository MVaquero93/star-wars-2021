import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports:[
        FormsModule,
        RouterTestingModule.withRoutes([]),
        ReactiveFormsModule],

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validate  inputs as required', () => {
    const username = component.registerForm.controls.username;
    const email = component.registerForm.controls.email;
    const firstName = component.registerForm.controls.first_name;
    const lastName = component.registerForm.controls.last_name;

    expect(username.valid).toBeFalsy();
    expect(username.errors.required).toBeTruthy();
    expect(email.valid).toBeFalsy();
    expect(email.errors.required).toBeTruthy();
    expect(firstName.valid).toBeFalsy();
    expect(firstName.errors.required).toBeTruthy();
    expect(lastName.valid).toBeFalsy();
    expect(lastName.errors.required).toBeTruthy();
  });

  it('should validate username and password length', () => {
    const username = component.registerForm.controls.username;
    const email = component.registerForm.controls.email;
    const firstName = component.registerForm.controls.first_name;
    const lastName = component.registerForm.controls.last_name;

    username.setValue('te');
    email.setValue('test');
    firstName.setValue('te');
    lastName.setValue('te');
    const errors = {...username.errors, ...email.errors, ...firstName.errors, ...lastName.errors};
    expect(errors.required).toBeFalsy();
    expect(errors.minlength).toBeTruthy();
    expect(username.valid).toBeFalsy();
    expect(email.valid).toBeFalsy();
  });
});
