import { HttpInterceptorFn } from '@angular/common/http';
import { AuthService } from '../Project-Pages/auth.service';
import { inject } from '@angular/core';
import { Injectable } from "@angular/core";
import { catchError, throwError } from 'rxjs';
import { map, mergeMap, switchMap } from 'rxjs/operators';
import { Router } from 'express';
export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  // const router = inject(Router);
  const accessToken = authService.accessToken;
  const refreshToken = authService.refreshToken as string;
  if (!accessToken) {
    return next(req);
  }
  return next(req.clone({
    headers: req.headers.set("Authorization", `Bearer ${accessToken}`)
  })).pipe(
    catchError((err) => {
      if (err.status === 401) {
        return authService.token(refreshToken)
          .pipe(
            mergeMap(res => {
              localStorage.setItem('accessToken', res.token.accessToken);
              localStorage.setItem('refreshToken', res.token.refreshToken);
              return next(req.clone({
                headers: req.headers.set('Authorization', `Bearer ${res.token.accessToken}`)
              }));
            }),
            catchError(res => {
              localStorage.removeItem('accessToken');
              localStorage.removeItem('refreshToken');
              localStorage.removeItem('user');
              // router.navigateByUrl(['header/dashboard']);
              return throwError(() => res)
            })
          )
      }
      return throwError(() => err)
    })
  );
};