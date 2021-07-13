import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../common.service';


@Component({
  selector: 'app-restaurant-update',
  templateUrl: './restaurant-update.component.html',
  styleUrls: ['./restaurant-update.component.css']
})
export class RestaurantUpdateComponent implements OnInit {
  alert:boolean = false;
  RestaurantEdit = new FormGroup(
    {
      name:new FormControl(''),
      address:new FormControl(''),
      email:new FormControl(''),
      mobile:new FormControl('')
    }
  )
  constructor(private restro: CommonService, private router: ActivatedRoute) { }

  ngOnInit(): void {

    this.restro.updateRestro(this.router.snapshot.params.id).subscribe((result)=>
    {
      this.RestaurantEdit = new FormGroup(
        {
          name:new FormControl(result['name']),
          address:new FormControl(result['address']),
          email:new FormControl(result['email']),
          mobile:new FormControl(result['mobile'])
        }
      )
    });
  }
  updaterestroOnclick()
  {
    this.restro.updaterestroOnclick(this.router.snapshot.params.id,this.RestaurantEdit.value).subscribe((result)=>{
       this.alert=true;
    });
  }

}
