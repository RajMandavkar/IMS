// src/app/auth.guard.ts

import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const isLoggedIn = !!localStorage.getItem('isLoggedIn');

  if (!isLoggedIn) {
    alert('Please login first!');
    router.navigate(['/userLogin']);
    return false;
  }

  return true;
};
