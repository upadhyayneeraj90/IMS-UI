import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }
  
  login(credential: any): Observable<any> {
    const loginUrl = 'https://unruffled-agnesi.148-113-6-82.plesk.page/api/Auth/validate';
    return this.http.post<any>(loginUrl, credential)
      .pipe(
        tap(response => {
          // store login data in local storage
          localStorage.setItem('authToken', response.AccessToken)
        }),
        catchError(error => {
          //Handle login error
          return of(null);
        })
      )
  }
}
