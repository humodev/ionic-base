import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

/**
 * The interceptor basically intercepts any requests coming out
 * and modifies the header to include an application/json content type
 * 
 * This is included in this project in case you need to make any changes 
 * to every request
 */

@Injectable()
export class RequestsInterceptor implements HttpInterceptor {

  private inj;

  constructor(private injector: Injector) {
    this.inj = injector;
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let customReq;

    customReq = req.clone({
      setHeaders: {
        'Content-Type': 'application/json'
      }
    });
    return next.handle(customReq);
  }
}
