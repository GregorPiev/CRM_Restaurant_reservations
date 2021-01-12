import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../interfaces';
import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private http: HttpClient) {}

  fetch(): Observable<Category[]> {
    return this.http.get<Category[]>('/api/category');
  }

  getById(id: string): Observable<Category> {
    return this.http.get<Category>(`/api/category/${id}`);
  }

  create(name: string, image?: File): void {
    const fd = new FormData();
    if (fd) {
      fd.append('image', image, image.name);
    }

    fd.append('name', name);
    this.http.post<Category>(`/api/category`, {});
  }
}
