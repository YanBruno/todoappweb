import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ICredential } from '../models/credential.model';
import { BehaviorSubject, Observable, first } from 'rxjs';
import { IGenericCommandResult } from 'src/app/core/models/generic-command-result.model';
import { User } from 'src/app/core/models/user.model';
import { CreateUser } from '../models/create.user.model';
import { Security } from 'src/app/core/utils/security.itul';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/core/services/message.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn = this.loggedIn.asObservable();

  private baseUrl = environment.base_url;

  constructor(
    private http: HttpClient,
    private router: Router,
    private messageService: MessageService,
  ) { }

  signUp(user: CreateUser): Observable<IGenericCommandResult> {
    return this.http.post<IGenericCommandResult>(`${this.baseUrl}/v1/User`, user).pipe(first());
  }

  login(user: ICredential): Observable<IGenericCommandResult> {
    return this
      .http
      .post<IGenericCommandResult>(`${this.baseUrl}/v1/login`, user)
      .pipe(
        first()
      );
  }

  logout(): void {
    Security.clear();
    this.updateLoggedIn();
    this.router.navigate(['/login']);
  }

  updateLoggedIn() {
    const token = localStorage.getItem('todotoken');
    if (token) this.loggedIn.next(true);
    if (!token) this.loggedIn.next(false);
  }

  handlerLogin(result: IGenericCommandResult) {
    if (result.success) {

      const user = result.data.user as User;
      Security.set(user, result.data.token);

      this.updateLoggedIn();

      this.messageService.clearNotifications();
      this.router.navigate(['/todos']);
    }

    if (!result.success) {
      this.messageService.addMessageFromResult(result);
    }
  }
}