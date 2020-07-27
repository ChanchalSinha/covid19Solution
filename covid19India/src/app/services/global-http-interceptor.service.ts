import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { Router } from '@angular/router';

@Injectable()
export class GlobalHttpInterceptorService implements HttpInterceptor {
    constructor(public router: Router) {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(req).pipe(
            catchError((error)=> {
                console.log('An error has occurred', error);
                if (error instanceof HttpErrorResponse) {
                    if (error.error instanceof ErrorEvent) {
                        console.error("Error Event");
                    } else {
                        console.log(`error status : ${error.status} ${error.statusText}`);
                        switch (error.status) {
                            case 401:      //login
                                this.router.navigateByUrl("/login");
                                break;
                            case 403:     //forbidden
                                this.router.navigateByUrl("/unauthorized");
                                break;
                            default:    // unknown error
                                console.log('An unknown error occurred - Please check your network connection..!!');
                                this.router.navigateByUrl("/error");
                                break;                                
                        }
                    } 
                } else {
                    console.error("some thing else happened");
                }
                return throwError(error);                
            })
        )

    }

}

