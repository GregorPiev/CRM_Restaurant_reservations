import { Component, OnInit } from '@angular/core';
import { CategoriesService } from './../shared/services/categories.service';

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.css'],
})
export class CategoriesPageComponent implements OnInit {
  constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.categoriesService.fetch().then(
      (data) => {},
      (error) => {
        console.error(error);
      }
    );
  }
}
