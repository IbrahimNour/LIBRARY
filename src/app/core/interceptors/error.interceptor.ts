import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
// import { catchError } from 'rxjs/operators';

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpEventType,
} from '@angular/common/http';
import { catchError, Observable, throwError, tap } from 'rxjs';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private readonly toastr: ToastrService,
    private readonly router: Router,
    private readonly spineer: NgxSpinnerService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap((event) => {
        if (event.type === HttpEventType.Response) {
          this.spineer.hide();
        }
      }),
      catchError((error: HttpErrorResponse) => {
        let title = '';
        if (error?.error instanceof ErrorEvent) {
          this.spineer.hide();
          title = `Error: ${error.error.message}`;
        } else {
          this.handleServerSideError(error);
          title = `Error Code: ${error?.status},  Message: ${error?.message}`;
        }
        return throwError(title);
      })
    );
  }

  handleServerSideError(error: HttpErrorResponse): void {
    console.log('error => ', error);
    this.spineer.hide();
    switch (error?.status) {
      case 401:
        this.toastr.error('You are not authorized , Please login again !');
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        this.router.navigate(['auth']);
        break;

      case 403:
        this.toastr.error(error?.error?.title);
        break;

      case 402:
        this.toastr.error(error?.error?.title);
        break;

      case 422:
        this.toastr.error(error?.error?.title);
        break;

      case 400:
        this.toastr.error(error?.error?.title);
        break;

      case 412:
        this.toastr.error(error?.error?.title);
        break;

      case 500:
        this.toastr.error('SERVER ERROR, TRY AGAIN  !');
        break;

      case 425:
        this.toastr.error(error?.error?.title);
        break;

      case 415:
        this.toastr.error(error?.error?.title);
        break;

      case 404:
        this.toastr.error(error?.error?.title);
        break;
    }
  }
}
