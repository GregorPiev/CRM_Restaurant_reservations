import { Component, OnInit } from '@angular/core';
import { Category } from '../shared/interfaces';
import { CategoriesService } from './../shared/services/categories.service';

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.css'],
})
export class CategoriesPageComponent implements OnInit {
  loading: boolean = false;

  constructor(private categoriesService: CategoriesService) {}
  categories: Category[] = [];
  ngOnInit(): void {
    this.loading = true;
    this.categoriesService.fetch().subscribe((result) => {
      console.log('categories:', result);
      this.categories = result;
      this.loading = false;
    });
  }
}
