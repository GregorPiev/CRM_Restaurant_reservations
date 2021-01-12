import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CategoriesService } from './../../shared/services/categories.service';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { MaterialService } from './../../shared/classes/material.service';
import { Category } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-categories-form',
  templateUrl: './categories-form.component.html',
  styleUrls: ['./categories-form.component.css'],
})
export class CategoriesFormComponent implements OnInit {
  isNew = true;
  form: FormGroup;
  image: File;
  imagePreview;
  category: Category;

  @ViewChild('input') inputRef: ElementRef;
  constructor(
    private route: ActivatedRoute,
    private service: CategoriesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
    });
    this.form.disable();

    this.route.paramMap
      .pipe(
        switchMap((params: Params) => {
          if (params.has('id')) {
            this.isNew = false;
            return this.service.getById(params.get('id'));
          }
          return of(null);
        })
      )
      .subscribe(
        (category) => {
          if (category) {
            this.category = category;
            this.form.patchValue({
              name: category.name,
            });
            this.imagePreview = category.imageSrc;
            MaterialService.updateTextInputs();
          }
          this.form.enable();
        },
        (error) => MaterialService.toast(error.error.message)
      );
  }

  triggerClick(): void {
    this.inputRef.nativeElement.click();
  }

  deleteCategory(): void {
    const decision = window.confirm(
      `Are you sute to delete category: ${this.category.name}`
    );

    if (decision) {
      this.service.delete(this.category._id).subscribe(
        (responce) => MaterialService.toast(responce.message),
        (error) => MaterialService.toast(error.error.message),
        () => {}
      );
    }
  }

  onFileUpload(event: any): void {
    const file = event.target.files[0];
    this.image = file;

    const reader = new FileReader();

    reader.onload = () => {
      this.imagePreview = reader.result;
    };

    reader.readAsDataURL(file);
  }

  onSubmit(): void {
    let obs$;

    this.form.disable();
    if (this.isNew) {
      obs$ = this.service.create(this.form.value.name, this.image);
    } else {
      obs$ = this.service.update(
        this.category._id,
        this.form.value.name,
        this.image
      );
    }

    obs$.subscribe(
      (category) => {
        MaterialService.toast('Changes are saved');
        this.category = category;
        this.form.enable();
      },
      (error) => {
        MaterialService.toast(error.error.message);
        this.form.enable();
      }
    );
  }
}
