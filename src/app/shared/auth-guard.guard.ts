import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { inject } from '@angular/core';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const authservice: AuthService=inject(AuthService);
  const router:Router=inject(Router);
  if(authservice.isLoggedInUser()){
    return true;
  }
  router.navigate(['/']);
  return false;
};
