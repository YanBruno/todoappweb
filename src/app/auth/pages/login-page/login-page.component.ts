import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ICredential } from '../../models/credential.model';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

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

  constructor(
    private fb: FormBuilder
    , private service: AuthService
  ) { }

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
