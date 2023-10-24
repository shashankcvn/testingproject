import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
 

  constructor(){
    console.log("hello")
  }
// Login Form
ngOnInit() {  
  console.log("message")
}  

Docheck(){
  
}

user :  User = {
  name : "shashank",
  surname : "",
  email : "",
  mobile : "",
  Age : 25,
  BirthDate : "",
  Gender :["male","female"]
};

mobregex  = /^([+]\d{2}[ ])?\d{10}$/;

emailregex = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

clicked(){
  console.log(`${this.user.name}  ${this.user.surname} ${this.user.email} ${this.user.mobile} ${this.user.Age} ${this.user.BirthDate} ${this.user.Gender}`);
  
}

value :any;

submitValue(val :any){
  this.value =val.value
}

};



export interface User {
name: string;
surname: string; 
email: string;
mobile : string;
Age : number;
BirthDate : string;
Gender : string[]
}




  
  

 



// store(name:string){
//    if(name==='shashank'){
//     alert("Hey There")
//    }


// setTimeout(() => {
//   alert(`Submited with: ${this.name} ${this.surname}`);
// },1000);