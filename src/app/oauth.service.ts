import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError, Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class OAuthService {

constructor(private http:HttpClient) { }
baseUrl = "http://localhost:8080/oauth"

GetAuthPage():Observable<string>
{

 return this.http.get<string>(this.baseUrl+'/AuthPage');
// return this.http.get<string>(this.baseUrl+'/check')

}

getAcessToken(auth_code:string)
{
  return this.http.post(this.baseUrl+'/getAccessToken',{code:auth_code});

}

getUserDetails(token: string | null)
{
return this.http.post(this.baseUrl+'/getUserDetails',{code:token});

} 
logout()
{
  return this.http.get(this.baseUrl+'/logout');
 
}

}
