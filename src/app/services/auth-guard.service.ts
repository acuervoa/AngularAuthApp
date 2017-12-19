import { Injectable } from '@angular/core';
import { Router,
         ActivatedRouteSnapshot,
         RouterStateSnapshot,
         CanActivate } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor() { }

  canActivate() {
    return true;
  }
}
