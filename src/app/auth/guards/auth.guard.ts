import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { first, tap } from 'rxjs';
import { UserService } from 'src/app/core/services/user.service';
import { Security } from 'src/app/core/utils/security.itul';

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