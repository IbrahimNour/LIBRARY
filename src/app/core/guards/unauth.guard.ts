import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthenticationService } from "@core/services/authentication.service";

@Injectable({
  providedIn: "root",
})
export class UnAuthGuard implements CanActivate {
  constructor(
    private authservice: AuthenticationService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // Check if user is authenticated
    if (!this.authservice.isAuthenticated()) {
      return true;
    }

    // If not authenticated, redirect to login page
    this.router.navigate([""]);
    return false;
  }
}
