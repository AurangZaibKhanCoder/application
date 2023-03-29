import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataserviceService } from '../services/dataservice.service';
import { Datainterface } from '../interface/datainterface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})



export class HomepageComponent {
  City: any = ['Florida', 'South Dakota', 'Tennessee', 'Michigan']
  hockey = false;
  football = false;
  hide = true;
  form!:Datainterface[];
  dataform=new FormGroup({
    firstname:new FormControl(),
    surname:new FormControl(),
    email:new FormControl(),
    phone:new FormControl(),
    password:new FormControl(),
    city:new FormControl(),
    gender:new FormControl(),
    hobbies:new FormControl()

  })
  
  constructor(private dataservice:DataserviceService,private router:Router){}
  ngOnInit(): void {
 
    
    
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.


  
    
  }
  datasubmit(){
    console.log(this.dataform.value)
    this.dataservice.newdata(this.dataform.value).subscribe(
    res=>{
      alert("succuessfully inserted data")
      this.router.navigateByUrl("homepageinfo")
      
    }
    )

  }
  changeCity(b:any){}
}
