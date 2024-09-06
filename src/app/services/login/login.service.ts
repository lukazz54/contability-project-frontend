import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignInRequest } from '../../models/interfaces/login/SignInRequest';
import { Observable } from 'rxjs';
import { SignInResponse } from '../../models/interfaces/login/SingInResponse';
import { MethodLoginEnum } from '../../models/enums/MethodLogin.enum';
import { RegisterRequest } from '../../models/interfaces/register/RegisterRequest';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
    private HTTP_API = 'http://localhost:8085';
    private http = inject(HttpClient);


    signIn(request: SignInRequest): Observable<SignInResponse>{
      request.methodLogin = MethodLoginEnum.EMAIL;
      return this.http.post<SignInResponse>(`${this.HTTP_API}/auth/login`, request);
    }

    register(request: RegisterRequest): Observable<boolean>{
      request.methodLogin = MethodLoginEnum.EMAIL;
      return this.http.post<boolean>(`${this.HTTP_API}/auth/register`, request)
    }

    signUp(request: SignInRequest): Observable<void>{
      return this.http.post<void>(`${this.HTTP_API}/signup`, request);
    }
}
