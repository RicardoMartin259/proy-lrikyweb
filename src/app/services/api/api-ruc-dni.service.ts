import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApiRucDniService {

  url: string = "https://dniruc.apisperu.com/api/v1/";
  token:string = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InJpY2FyZG9tYXJ0aW4yNTlAZ21haWwuY29tIn0.E2I7WAfZOg75HPica9inHZfyua0eS_EsL1TfL7qVCw8";
  constructor(private http:HttpClient) { }

  consultarRUC(ruc: string):Observable<any>{
    let dir: string = this.url+"ruc/"+ruc+"?token="+this.token;
    return this.http.get(dir);
  }

  consultarDNI(dni: string):Observable<any>{
    let dir: string = this.url+"dni/"+dni+"?token="+this.token;
    return this.http.get(dir);
  }

}
