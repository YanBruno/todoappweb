import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { first, tap } from 'rxjs';

export const authGuard = () => {

  const router = inject(Router);
  const service = inject(AuthService)

  service.updateLoggedIn();

  return service
    .isLoggedIn
    .pipe(
      tap(value => {
        !value ? router.navigate(['/login']) : true;
      }),
      first()
    )
}