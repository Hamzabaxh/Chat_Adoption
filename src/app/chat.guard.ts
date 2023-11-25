import { CanActivateFn } from '@angular/router';

export const chatGuard: CanActivateFn = (route, state) => {
  return true;
};
