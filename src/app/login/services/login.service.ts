import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { INewUser, IUser } from '../interfaces/login.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  userToken: string;
  urlBase = environment.api;
  endpoints = environment.endpoints;

  constructor(
    private http: HttpClient
  ) {
    this.readToken();
  }

  registerUser( user: INewUser) {
    const authData = {
      ...user,
      returnSecureToken: false
    };

    return this.http.post(
      this.urlBase + this.endpoints.config.newUser,
      authData
    ).pipe(
      map((response: any) => {
        console.log(response);
        return response;
      })
    );
  }

  login(user: IUser) {
    const url = this.urlBase + this.endpoints.config.login;
    const credentials = btoa('student_notes' + ':' + 'student_notes_app_cliente_2020');
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic ' + credentials
    });

    const params = new URLSearchParams();
    params.set('grant_type', 'password');
    params.set('username', user.userName);
    params.set('password', user.pass);

    return this.http.post(url, params.toString(), {headers: httpHeaders})
      .pipe(
        map((response: any) => {
          this.saveToken(response.access_token);
          return response;
        })
    );
  }

  logOut() {
    localStorage.removeItem('token');
  }

  private saveToken(idToken: string) {
    this.userToken = idToken;
    localStorage.setItem('token', idToken);

    const hoy = new Date();
    hoy.setSeconds(3600);
    localStorage.setItem('expira', hoy.getTime().toString());
  }

  readToken() {
    if (localStorage.getItem('token')) {
      this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = '';
    }

    return this.userToken;
  }
}
