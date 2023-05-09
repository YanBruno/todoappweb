import { Component } from '@angular/core';
import { User } from 'src/app/core/models/user.model';
import { FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { CreateUser } from '../../models/create.user.model';
import { IGenericCommandResult } from 'src/app/core/models/generic-command-result.model';
import { Security } from 'src/app/core/utils/Security';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/core/services/message.service';
import { Message } from 'src/app/core/models/message.model';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent {

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
