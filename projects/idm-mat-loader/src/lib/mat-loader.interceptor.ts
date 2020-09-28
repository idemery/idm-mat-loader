import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { MatLoaderService } from './mat-loader.service';

@Injectable()
export class MatLoaderInterceptor implements HttpInterceptor {
  constructor(public loaderService: MatLoaderService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const method = req.method.toLowerCase();
    const notGET = method !== 'get';

    setTimeout(() => this.loaderService.show());

    return next.handle(req).pipe(
      tap(
        event => {
          if (event instanceof HttpResponse) {
            if (notGET && event.ok) {
              this.loaderService.showSuccess();
            }
          }
        },
        error => {
          if (error instanceof HttpErrorResponse) {
            if (notGET && !error.ok) {
              this.loaderService.showFail();
            }
          }
        }
      ),
      finalize(() => {
        setTimeout(() => this.loaderService.hide());
      })
    );
  }
}
