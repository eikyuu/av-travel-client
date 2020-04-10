import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Tours } from '../models/tours';

@Injectable({
  providedIn: 'root'
})
export class ToursService {

  public api = 'http://localhost:3003';

  constructor(private http: HttpClient) {}

  public getTours(): Observable<Tours[]> {
    return this.http.get<Tours[]>(`${this.api}/tours`);
  }

}
