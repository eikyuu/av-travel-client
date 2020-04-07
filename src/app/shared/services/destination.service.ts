import { Injectable } from '@angular/core';
import { Destination } from '../models/destination';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DestinationService {

  public api = 'http://localhost:3003';

  constructor(private http: HttpClient) {}

  public getDestinations(): Observable<Destination[]> {
    return this.http.get<Destination[]>(`${this.api}/destinations`);
  }

  public updateDestination(destination: Destination, id: number): Observable<Destination> {
    return this.http.put<Destination>(`${this.api}/destinations/${id}`, destination);
  }
}
