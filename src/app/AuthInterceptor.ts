import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token:any = localStorage.getItem('token');
    const access = JSON.parse(token);
    if (token) {
      const authReq = req.clone({headers: req.headers.set('Authorization', `Bearer ${access.access}`)});
      return next.handle(authReq);
    }
    return next.handle(req);
  }

}