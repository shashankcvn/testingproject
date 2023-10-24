import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'; 
import { Observable ,Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  constructor(private http:HttpClient) { }

  submit(){
    alert("Thanks for suscribe")
  }

  // Product :any = {id : "5",name:"laptop"}
  

  product(): Observable<any>{

    return this.http.get( 'https://jsonplaceholder.typicode.com/users')
  }


 userName  = new Subject <any>() 

}
