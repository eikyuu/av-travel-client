import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public api = 'http://localhost:3001';
  user: User;
  token: string;

  constructor(private http: HttpClient) {}

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.api}/api/users`);
  }

  public getMe() {
    return this.http.get<User>(`${this.api}/api/users/me`).pipe(
      tap((user: User) => {
        this.user = user;

      })
    );
  }

  public isLogged( ) {
    return this.getMe().pipe(
      map((user: User) => {
        return (user != null);
      }
    ));
  }

  public connexion(user: User) {
    return this.http.post(`${this.api}/api/users/signin`, user, {observe: 'response'}).pipe(
      tap((response: HttpResponse<any>) => {
        const token = response.headers.get('JWT-TOKEN');
        localStorage.setItem('JWT-TOKEN', token);
        this.user = response.body;
        return response.body;
      }));
    }
}
