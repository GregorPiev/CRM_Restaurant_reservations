import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PositionsService {
  constructor(private http: HttpClient) {}

  fetch(categoryId: string): Observable<any> {
    return this.http.get<any>(`/api/position/${categoryId}`);
  }
}
