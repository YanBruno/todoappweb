import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ICredential } from '../../models/credential.model';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  busy = false;

  form = this.fb.group({
    username: ['', Validators.compose([
      Validators.minLength(3),
      Validators.maxLength(80),
      Validators.required
    ])]
    , password: ['', Validators.compose([
      Validators.minLength(3),
      Validators.maxLength(80),
      Validators.required
    ])]
  });

  constructor(private fb: FormBuilder
    , private service: AuthService) {


  }

  submit() {
    this.busy = true;

    this
      .service
      .login(this.form.value as ICredential)
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
}
