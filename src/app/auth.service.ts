
import { Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  login({ role ,email, password }: any): Observable<any> {
    if (role== 2 &&email == 'vk@gmail.com' && password == 'vk@123') {
      this.setToken('abcdefghijklmnopqrstuvwxyz');
      return of({role :2, name: 'virat kholi', email: 'vk@gmail.com' });
    }
    else if (role== 1 &&email == 'admin@gmail.com' && password == 'admin@123') {
      this.setToken('abcdefghijklmnopqrstuvwxyz');
      return of({role :1 ,name: 'Admin', email: 'admin@gmail.com' });
    }
    return throwError(new Error('Failed to login'));
  }
}