import { Component, Input } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
    
  constructor (private _msgService: DesignUtilityService){
    

    this._msgService.userName.subscribe(uname => this.userName = uname)
  }
  ngOnInit(){
    
    // this.Product =this._msgService.Product

  }

  employee = [{emp_id :101,name:"shashank",email:"shashankcvn@gmail.com"},
                      {emp_id: 102,name:"Rushi",email:"rushi@gmail.com"},
                      {emp_id :103,name:"kaustubh",email:"kausti41@gmail.com"}]



                    
btnClick(){
 this._msgService.submit()
}
 
// Product ={id : "1",name: "TV"};

 @Input()  myvalue = "ux"


 userName :string = "uxtrend"

 UpdateName(uname : any){
  // this.userName = uname.value

this._msgService.userName.next(uname.value)
}
}
