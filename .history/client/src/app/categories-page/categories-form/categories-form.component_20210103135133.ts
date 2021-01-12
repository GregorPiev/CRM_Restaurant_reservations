import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CategoriesService } from './../../shared/services/categories.service';

@Component({
  selector: 'app-categories-form',
  templateUrl: './categories-form.component.html',
  styleUrls: ['./categories-form.component.css'],
})
export class CategoriesFormComponent implements OnInit {
  isNew = true;
  form: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private service: CategoriesService
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
    });

    this.route.paramMap.subscribe((params: Params) => {
      if (params.has('id')) {
        this.isNew = false;
      } else {
      }
    });
  }

  onSubmit() {}
}
