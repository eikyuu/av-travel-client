import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Tours } from '../models/tours';

@Injectable({
  providedIn: 'root'
})
export class ToursService {

  public api = 'http://localhost:3003';

  tours: Tours[] = [];

  constructor(private http: HttpClient) {}

  public getTours(): Observable<Tours[]> {
    return this.http.get<Tours[]>(`${this.api}/tours`);
  }

  public getToursById(id): Observable<Tours[]> {
    return this.http.get<Tours[]>(`${this.api}/tours/${id}`);
  }

  public postTours(tours: Tours): Observable<Tours> {
    return this.http.post<Tours>(`${this.api}/tours`, tours);
  }
}
