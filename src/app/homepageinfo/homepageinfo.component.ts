import { Component } from '@angular/core';
import { DataserviceService } from '../services/dataservice.service';
import { Datainterface } from '../interface/datainterface';

@Component({
  selector: 'app-homepageinfo',
  templateUrl: './homepageinfo.component.html',
  styleUrls: ['./homepageinfo.component.css']
})
export class HomepageinfoComponent {
  data!:Datainterface[];
  constructor(private dataservice:DataserviceService){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.dataservice.all().subscribe(
      data=>{
        console.log(data)
        this.data=data;
      }
    )
  }
  delete(id:any){
    this.dataservice.deleteData(id).subscribe(
    {
      next:(Response)=>{
        console.log("data id ",id)
        this.dataservice.all().subscribe(
          data=>{
            console.log(data)
            this.data=data;
          }
        )
        
      }
    }
    )
  }
}
