import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'restaurent-app';

  constructor(private _router:Router)
  {

  }

  navigateToFirst() {
    console.log("success");
    this._router.navigate(['list']);

  }
}
