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

  async Get(params:Params):Promise<Observable<any>>{
    return await this.http.get(this.backendURL, {
      params:params as any
    });
  }
  async Post(data:any):Promise<Observable<any>>{
    return await this.http.post(this.backendURL, data, {
      headers:{'Content-Type':'application/json'}
    });
  }
  async Patch(data:any):Promise<Observable<any>>{
    return await this.http.patch(this.backendURL, data, {
      headers:{'Content-Type':'application/json'}
    });
  }
  async Delete(data:Params):Promise<Observable<any>>{
    return await this.http.delete(this.backendURL, {
      body:data
    });
  }

}
