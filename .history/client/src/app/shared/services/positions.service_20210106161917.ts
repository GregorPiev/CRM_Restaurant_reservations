import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Positions } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class PositionsService {
  constructor(private http: HttpClient) {}

  fetch(categoryId: string): Observable<Positions[]> {
    return this.http.get<Positions[]>(`/api/position/${categoryId}`);
  }
}
