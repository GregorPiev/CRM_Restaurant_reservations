import { MaterialService } from './../shared/classes/material.service';
import { Route } from '@angular/compiler/src/core';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../shared/layouts/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit, OnDestroy {
  form: FormGroup;
  aSub: Subscription;

  constructor(
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    })

    this.route.queryParams.subscribe((params: Params) => {
      if (params['registered']) {
        MaterialService.toast('You are allowed sign in using your credentials now')
      } else if (params['accessDenied']) {
        MaterialService.toast('You have to sign up firstly')
      } else if (params['sessianFailed']) {
        MaterialService.toast('Renew login')
      }
    })
  }

  onSubmit(): void {
    this.form.disable();
    this.aSub = this.auth.login(this.form.value)
      .subscribe(
        res => {
          console.log('Result login token:', res)
          this.router.navigate(['/overview'])
          this.form.enable() //temprorary
        },
        err => {
          console.warn('Error login component:', err)
          MaterialService.toast(`Error login component: ${err.error.message}`)
          this.form.enable()
        }
      )
  }
  ngOnDestroy() {
    if (this.aSub) {
      this.aSub.unsubscribe();
    }
  }

}
