import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private http: HttpClient) {}

  async fetch(): Promise<Category[]> {
    return await this.http.get<Promise<any>>('/api/category').toPromise();
  }
}
