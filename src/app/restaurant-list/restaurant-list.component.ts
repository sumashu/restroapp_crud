import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {
   public collection:any;
  constructor(private _commonService: CommonService) { }

  ngOnInit(): void {
    this._commonService.getRestroList().subscribe((result)=>
    {
      this.collection= result;
      console.log(this.collection);
    });
  }

}
