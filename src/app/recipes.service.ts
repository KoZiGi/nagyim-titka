import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Params } from './params';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  
  private backendURL = 'http://localhost/2-14-SZFT/Backend/php/api/api.php';

  constructor(private http:HttpClient) { }

  Get(params:Params):Observable<any>{
    return this.http.get(this.backendURL, {
      params:params as any
    });
  }
  Post(data:Params):Observable<any>{
    return this.http.post(this.backendURL, data, {
      headers:{'Content-Type':'application/json'}
    });
  }
  Patch(data:Params):Observable<any>{
    return this.http.patch(this.backendURL, data, {
      headers:{'Content-Type':'application/json'}
    });
  }
  Delete(data:Params){
    return this.http.delete(this.backendURL, {
      body:data
    });
  }

}
