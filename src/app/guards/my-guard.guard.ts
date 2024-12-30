import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterState, RouterStateSnapshot} from '@angular/router';
import { inject } from '@angular/core';
export const myGuardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  var loogedIn = sessionStorage.getItem('loggedIn');
  if(loogedIn == "false"){
    alert("Please login redirecting to login page.....");
    router.navigate(["/login"]);
    return false;
  }
  return true;
};


