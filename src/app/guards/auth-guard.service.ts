import { Injectable } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor(private router: Router) { }

  canActivate(): | Observable<boolean | UrlTree>
                 | Promise<boolean | UrlTree>
                 | boolean
                 | UrlTree {

  if(typeof window !== 'undefined' && window.localStorage) {
    if(localStorage.getItem('USR_TOKEN')) {
      return true;
    }
  }

    this.router.navigate(['/']);
    return false;

  }
}
