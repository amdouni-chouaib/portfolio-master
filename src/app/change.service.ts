import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChangeService {
 
  data:string=""
  constructor(private http:HttpClient) { }

  signup(data:any):Observable<any>{
    return this.http.post<any>("http://localhost:3001/register",data)
  }
  login(data:any):Observable<any>{
    return this.http.post<any>("http://localhost:3001/login",data)
  }


}
