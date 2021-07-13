import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-restaurant-add',
  templateUrl: './restaurant-add.component.html',
  styleUrls: ['./restaurant-add.component.css']
})
export class RestaurantAddComponent implements OnInit {
 alert:boolean = false;
  RestaurantAdd = new FormGroup(
    {
      name:new FormControl(''),
      address:new FormControl(''),
      email:new FormControl(''),
      mobile:new FormControl('')
    }
  )
  

  constructor(private rstro: CommonService) { }

  ngOnInit(): void {
  }

  creatResto()
  {
    this.rstro.addRsto(this.RestaurantAdd.value).subscribe((result)=>
    {
       this.alert = true;
       this.RestaurantAdd.reset([]);
    })
  }

  alertClose()
  {
    this.alert = false;
  }

}
