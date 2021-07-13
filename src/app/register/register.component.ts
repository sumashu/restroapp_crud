import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  alert:boolean = false;
  RegisterUser = new FormGroup(
    {
      name:new FormControl(''),
      password:new FormControl(''),
      email:new FormControl('')
    
    }
  )
  constructor(private restro : CommonService) { }

  ngOnInit(): void {
  }

  regiUser()
  {
    
    this.restro.createUser(this.RegisterUser.value).subscribe((result)=>
    {
      this.RegisterUser.reset([]); 
       console.log(result,"data created successfully");
        this.alert=true;
    })
  }

}
