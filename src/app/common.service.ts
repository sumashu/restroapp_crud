import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
    url = "http://localhost:3000/restro";
  constructor(private _http: HttpClient) { 
    
  }
  getRestroList() {
    return this._http.get(this.url);
  }
}
