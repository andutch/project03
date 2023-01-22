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

  // this.route.paramMap.subscribe(()=>{//!added jan 18th not working
  //   this.currentWarehouseId=+this.route.snapshot.paramMap.get('id')!;
  // })
  this.getSelected();

  this.interval = setInterval(() => { 
    this.getSelected(); 
    }, 1000);

  //!Jan21 trying to autopopulate the text area
  // this.modifiedItem = Object.assign({},this.selectedItem);
  // console.log("modified item="+this.modifiedItem )
 
  }


  products: Product[]=[];
  currentWarehouseId:any;

  selectedItem:any;
  interval:any;
// this.internalService.productSubject.subscribe(value=>{this.selectedItem=value;});
//this.internalService.productSubject.subscribe();

  getSelected(){
// this.selectedItem=this.internalService.selectedItem;

this.internalService.productSubject.subscribe(value=>{this.selectedItem=value;});
//console.log("product displayed"+JSON.stringify(this.selectedItem))

}

//////////////////////////////////////////////// Jan 18th change
async deleteSelected(deleteID:number){
  await this.productService.deleteProduct(deleteID);
  
setTimeout(() => {this.setZeroth()
}, 250);

  // this.setZeroth();
  // this.setZeroth();
  // this.setZeroth();
  // this.setZeroth();
  // this.setZeroth();
  // this.setZeroth();
  // this.setZeroth();
}

setZeroth(){

// setTimeout(() => {console.log("timeout")
// }, 2000);

  this.productService.getProductList(this.internalService.selectedWareHouseId).
  
  subscribe(
    data=>{
      this.products=data; //!need to get right id for warehouse

      console.log("product 0"+this.products[0]);
 this.internalService.productSubject.next(this.products[0])//this line updates detailed view
//  this.internalService.productSubject.next(this.products[0])//this line updates detailed view
 console.log("success product 0"+this.products[0]);
}
  );

  console.log("running zeroth");
  // this.internalService.setZeroth();

  // this.internalService.setSelectedItem(this.products[0]);


// this.internalService.productSubject.next;////////////not working?
//  this.advanceSelectedItem();
//  this.internalService.productSubject.next;

//
}

// updateSelected(updateID:number){
//   this.productService.updateProduct(updateID);
updateSelected(updateID:number){

  this.productService.updateProduct(this.selectedItem);
/// need referesh page
// this.internalService.productSubject.next;////////////not working?
///////////////////////////////////////------------------->
// const currentWarehouseId= this.internalService.selectedWareHouse;

this.productService.getProductList(this.internalService.selectedWareHouseId).subscribe(//
  data=>{
    this.products=data; //assigns results to product array
  }
)



////////////////////////////////// added jan 19th dunno if works
for(let product in this.products){
  if(updateID==this.products[product].id){
    this.internalService.setSelectedItem(this.products[product]);
  }else{}
}



 this.advanceSelectedItem()

//
}

createProduct(){
  this.productService.createProduct(this.internalService.selectedWareHouseId);
/// need referesh page
// this.internalService.productSubject.next;////////////not working?
 this.advanceSelectedItem()

//
}

// updateSelected(deleteID:number){
//   this.productService.deleteProduct(deleteID);
// /// need referesh page
// // this.internalService.productSubject.next;////////////not working?
//  this.advanceSelectedItem()

// //
// }

advanceSelectedItem(){
  // console.log("start adv")
  // // this.currentWarehouseId=+this.route.snapshot.paramMap.get('id')!;
  // console.log(this.currentWarehouseId+" warehouseID")
  // this.productService.getProductList(this.currentWarehouseId).subscribe(
  //   data=>{
  //     this.products=data; //assigns results to product array
  //     console.log(this.products)
  //   }
  // )

  //   for(let product in this.products){
  //       if((id+1)==this.products[product].id){
  //         this.internalService.setSelectedItem(this.products[product]);
  //       }else{}
  
  //   }
    // location.reload();//placeholder
    

    // this.internalService.advanceSelectedItem();
  }
 
}



