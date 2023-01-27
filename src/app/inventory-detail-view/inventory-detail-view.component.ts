import { Component, OnInit,OnChanges, SimpleChanges } from '@angular/core';
import { Product } from '../common/product';

import { InternalServiceService } from '../services/internal-service.service';
import { ProductService } from '../services/product.service';
import { InventoryViewComponent } from '../inventory-view/inventory-view.component';
import { ActivatedRoute } from '@angular/router';
import{timer} from 'rxjs'
import { withXsrfConfiguration } from '@angular/common/http';

@Component({
  selector: 'app-inventory-detail-view',
  templateUrl: './inventory-detail-view.component.html',
  styleUrls: ['./inventory-detail-view.component.css']
})
export class InventoryDetailViewComponent implements OnInit{


constructor(private internalService:InternalServiceService, private productService:ProductService, private route: ActivatedRoute){
  this.internalService.productSubject.subscribe(value=>{this.selectedItem=value;});


  this.getSelected();
}

ngOnInit():void{


  this.getSelected();

 
  }


  products: Product[]=[];
  currentWarehouseId:any;

  selectedItem:any;
  interval:any;
  testVar:any;


  getSelected(){


this.internalService.productSubject.subscribe(value=>{this.selectedItem=value;});


}

async deleteSelected(deleteID:number){
  
  await this.productService.deleteProduct(deleteID);

alert("Item deleted!");
// this.testVar=this.productService.getProductList(this.internalService.selectedWareHouseId).subscribe();

// this.internalService.fetchProducts(this.internalService.selectedWareHouseId);
}

setZeroth(){

  this.productService.getProductList(this.internalService.selectedWareHouseId).
  
  subscribe(
    data=>{
      this.products=data; 

      console.log("product 0"+this.products[0]);
  this.internalService.productSubject.next(this.products[0])//this line updates detailed view
  this.internalService.wareHouseSubject.next(this.internalService.selectedWareHouse);//not working
 console.log("success product 0"+this.products[0]);
}
  );

  console.log("running zeroth");
}


updateSelected(updateID:number){


   if(this.selectedItem.unitsInStock>100){
    alert("Max qty exceeded!!!");
   }
 
else{
  this.productService.updateProduct(this.selectedItem);


this.productService.getProductList(this.internalService.selectedWareHouseId).subscribe(//
  data=>{
    this.products=data; //assigns results to product array
  }
  
)


for(let product in this.products){
  if(updateID==this.products[product].id){
    this.internalService.setSelectedItem(this.products[product]);
  }else{}
}

this.setZeroth();
// this.getSelected();

alert("Item updated!");
}

}

createProduct(){
  this.productService.createProduct(this.internalService.selectedWareHouseId);

 
  alert("Item created!");
}

}



