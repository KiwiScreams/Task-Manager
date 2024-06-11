import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
@Injectable
  ({
    providedIn: 'root'
  })
export class AuthService {
  public readonly tokenName: string = "token";
  httpClient: HttpClient = inject(HttpClient);
  constructor(private http: HttpClient) { }
  get accessToken() {
    return localStorage.getItem('accessToken');
  }
  get refreshToken() {
    return localStorage.getItem('refreshToken');
  }
  UserLogin(email: string, password: string): Observable<{
    token:
    {
      accessToken: string,
      refreshToken: string,
    },
    user: any
  }> {
    return this.http.post<any>(`${environment.apiURL}auth/login`, { email, password });
  }
  token(refreshToken: string): Observable<{
    token:
    {
      accessToken: string,
      refreshToken: string
    },
    user: any
  }> {
    return this.http.post<any>(`${environment.apiURL}auth/token`, { refreshToken });
  }
  UserRegister(data: any) {
    return this.http.post<any>(`${environment.apiURL}auth/signup`, data);
  }
}