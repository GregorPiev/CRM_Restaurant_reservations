import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private http: HttpClient) {}

  async fetch(): Promise<any> {
    return await this.http.get('/api/category').toPromise();
  }
}
