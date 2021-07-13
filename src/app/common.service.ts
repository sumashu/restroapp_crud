import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
    url = "http://localhost:3000/restro";
    Regurl = "http://localhost:3000/users";

  constructor(private _http: HttpClient) { 
    
  }
  getRestroList() {
    return this._http.get(this.url);
  }

  addRsto(data)
  {
    return this._http.post(this.url,data); 
  }

  updateRestro(id)
  {
    return this._http.get(`${this.url}/${id}`);
  }

  updaterestroOnclick(id,data)
  {
    return this._http.put(`${this.url}/${id}`,data);
  }

  createUser(data)
   {
    return this._http.post(this.Regurl,data);
  }
}

