import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _http: HttpClient) { 
    
  }
  getRestroList() {
    console.log("this restro method is worked properly");
  }
}
