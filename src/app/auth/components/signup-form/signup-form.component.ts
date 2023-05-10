import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { CreateUser } from '../../models/create.user.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {


  busy = false;

  public form = this.fb.group({
    firstname: ['', Validators.compose([
      Validators.minLength(3),
      Validators.maxLength(80),
      Validators.required
    ])],
    lastname: ['', Validators.compose([
      Validators.minLength(3),
      Validators.maxLength(80),
      Validators.required
    ])],
    emailAddress: ['', Validators.compose([
      Validators.minLength(5),
      Validators.maxLength(120),
      Validators.required
      // CustomValidator.EmailValidator
    ])],
    password: ['', Validators.compose([
      Validators.minLength(6),
      Validators.maxLength(20),
      Validators.required
    ])]
  });

  constructor(
    private service: AuthService,
    private fb: FormBuilder,
    private location: Location,
  ) { }

  submit() {
    this.busy = true;

    var user = this.form.value as CreateUser;
    this
      .service
      .signUp(user)
      .subscribe({
        next: result => {
          this.service.handlerLogin(result)
        }
        , error: err => {
          console.log(err)
        },
        complete: () => { this.busy = false; }
      })
  }

  goBack() {
    this.location.back();
  }
}
