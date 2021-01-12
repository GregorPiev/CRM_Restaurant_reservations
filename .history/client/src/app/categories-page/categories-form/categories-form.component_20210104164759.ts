import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CategoriesService } from './../../shared/services/categories.service';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { MaterialService } from './../../shared/classes/material.service';

@Component({
  selector: 'app-categories-form',
  templateUrl: './categories-form.component.html',
  styleUrls: ['./categories-form.component.css'],
})
export class CategoriesFormComponent implements OnInit {
  isNew = true;
  form: FormGroup;
  @ViewChild('input') inputRef: ElementRef;
  constructor(
    private route: ActivatedRoute,
    private service: CategoriesService
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
            this.form.patchValue({
              name: category.name,
            });
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

  onFileUpload(event: any): void {
    const file = event.target.files[0];
  }

  onSubmit(): void {}
}