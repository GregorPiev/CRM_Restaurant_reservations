import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../interfaces';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private http: HttpClient) {}

  async fetch(): Promise<Category[]> {
    try {
      return await this.http.get<Category[]>('/api/category/').toPromise();
    } catch (err) {
      console.log('Server error:', err);
    }
  }
}
