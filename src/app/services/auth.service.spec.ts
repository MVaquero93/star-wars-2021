import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import {RouterTestingModule} from '@angular/router/testing';
import {Router} from "@angular/router";

describe('AuthService', () => {
  let service: AuthService;
  const router = {
    navigate: jasmine.createSpy('navigate')
  }
  const user = {
    username: 'test',
    first_name: 'test',
    email: 'asdasdsa',
    last_name: 'asdasdasd'
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        { provide: Router, useValue: router }
      ]
    });
    service = TestBed.inject(AuthService);
    localStorage.users =  JSON.stringify([{username: 'Marc'}, {username: 'asd'}])
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should successfully login', () => {
    expect(service.login('Marc')).toEqual({username: 'Marc'})
  })

  it('should register user', () => {
    service.register(user)
    expect(router.navigate).toHaveBeenCalledWith(['/principal/ships']);
    expect(service.login('test')).toEqual(user)
  })

  it('should find 2 registered users', () => {
    expect(service.getUsers().length).toEqual(2)
  })
});
