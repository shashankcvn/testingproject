 import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';
import {SplitButtonModule} from 'primeng/splitbutton';

@Component({
  selector: 'app-hike',
  templateUrl: './hike.component.html',
  styleUrls: ['./hike.component.css']
})
export class HikeComponent  {

  constructor (private _msgService: DesignUtilityService){
    

    this._msgService.userName.subscribe(uname => this.userName = uname)
  }
  
  products:any = {};

  ngOnInit(){
  //  this.Product =this._msgService.Product

  this._msgService.product()
  .subscribe( ProductData => this.products = ProductData) 



  }

  

//   @Input() item = 0;

//  @Output () updateEvent = new EventEmitter<string>(); 
 
// @Output() updateOld = new EventEmitter<any>();



btnClick(){
this._msgService.submit()
}



userName :any = "uxtrend"

UpdateName(uname : any){ 
  // this.userName = uname.value

this._msgService.userName.next(uname.value)
console.log(this.userName)
}



}
