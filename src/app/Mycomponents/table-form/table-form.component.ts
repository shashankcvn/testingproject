import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';


@Component({
  selector: 'app-table-form',
  templateUrl: './table-form.component.html',
  styleUrls: ['./table-form.component.css']
})
export class TableFormComponent {

  dataTitle = "AN Products";

  products:any = [{
    id: 101, 
    name: "Tv", 
    price: 25000
  },

  {
    id: 102, 
    name: "Washing Machine",
     price: 55000
  },

  {
    id: 103, 
    name: "Laptop", 
    price: 95000
  }]

   onAddproduct(id: { value: any; },name: { value: any; },price: { value: any; }){
       this.products.push({
        id: id.value,
        name: name.value,
        price : price.value
       })
   }


  ondelete(id:any){
    this.products.splice(id,1)
  }
}
