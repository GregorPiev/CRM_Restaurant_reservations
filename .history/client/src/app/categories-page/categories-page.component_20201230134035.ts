import { Component, OnInit } from '@angular/core';
import { Category } from '../shared/interfaces';
import { CategoriesService } from './../shared/services/categories.service';

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.css'],
})
export class CategoriesPageComponent implements OnInit {
  constructor(private categoriesService: CategoriesService) {}
  categories: Category[] = [];
  ngOnInit(): void {
    this.getCategoriesServices();
  }

  async getCategoriesServices() {
    this.categories = await this.categoriesService.fetch();
    console.log('categories:', this.categories);
  }
}
