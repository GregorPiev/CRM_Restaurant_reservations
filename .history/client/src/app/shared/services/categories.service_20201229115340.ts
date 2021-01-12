import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private http: HttpClient) {}

  async fetch(): Promise<Category[]> {
    try {
      return await this.http
        .get<Category[]>('/api/category')
        .toPromise()
        .then((response) => response)
        .catch();
    } catch (err) {
      console.log('Server error:', err);
    }
  }
}
