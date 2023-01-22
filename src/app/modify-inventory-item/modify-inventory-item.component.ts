
// import { Component, OnInit,OnChanges } from '@angular/core';
// import { Product } from '../common/product';

// import { InternalServiceService } from '../services/internal-service.service';
// import { ProductService } from '../services/product.service';
// import { InventoryViewComponent } from '../inventory-view/inventory-view.component';
// import { ActivatedRoute } from '@angular/router';


// @Component({
//   selector: 'app-modify-inventory-item',
//   templateUrl: './modify-inventory-item.component.html',
//   styleUrls: ['./modify-inventory-item.component.css']
// })
// export class ModifyInventoryItemComponent {




// constructor(private internalService:InternalServiceService, private productService:ProductService, private route: ActivatedRoute){
//   this.internalService.productSubject.subscribe(value=>{this.selectedItem=value;});
//   this.getSelected();
// }

// ngOnInit():void{

//   // this.route.paramMap.subscribe(()=>{//added jan 18th not working
//   //   this.currentWarehouseId=+this.route.snapshot.paramMap.get('id')!;
//   // })

//   this.getSelected();
//   }

//   products: Product[]=[];
//   // currentWarehouseId: number=3;

//   selectedItem:any;
// // this.internalService.productSubject.subscribe(value=>{this.selectedItem=value;});
// //this.internalService.productSubject.subscribe();

//   getSelected(){
// // this.selectedItem=this.internalService.selectedItem;
// console.log('get selected in inv detail view!!')
// this.internalService.productSubject.subscribe(value=>{this.selectedItem=value;});
// }

// //////////////////////////////////////////////// Jan 18th change
// deleteSelected(deleteID:number){
//   this.productService.deleteProduct(deleteID);
// /// need referesh page
// // this.internalService.productSubject.next;////////////not working?
//  this.advanceSelectedItem()

// //
// }

// updateSelected(updateID:number){
//   this.productService.updateProduct(updateID);
// /// need referesh page
// // this.internalService.productSubject.next;////////////not working?
// ///////////////////////////////////////------------------->
// // const currentWarehouseId= this.internalService.selectedWareHouse;

// this.productService.getProductList(this.internalService.selectedWareHouse).subscribe(
//   data=>{
//     this.products=data; //assigns results to product array
//   }
// )



// ////////////////////////////////// added jan 19th dunno if works
// for(let product in this.products){
//   if(updateID==this.products[product].id){
//     this.internalService.setSelectedItem(this.products[product]);
//   }else{}
// }



//  this.advanceSelectedItem()

// //
// }

// createProduct(){
//   this.productService.createProduct();
// /// need referesh page
// // this.internalService.productSubject.next;////////////not working?
//  this.advanceSelectedItem()

// //
// }

// // updateSelected(deleteID:number){
// //   this.productService.deleteProduct(deleteID);
// // /// need referesh page
// // // this.internalService.productSubject.next;////////////not working?
// //  this.advanceSelectedItem()

// // //
// // }

// advanceSelectedItem(){
//   // console.log("start adv")
//   // // this.currentWarehouseId=+this.route.snapshot.paramMap.get('id')!;
//   // console.log(this.currentWarehouseId+" warehouseID")
//   // this.productService.getProductList(this.currentWarehouseId).subscribe(
//   //   data=>{
//   //     this.products=data; //assigns results to product array
//   //     console.log(this.products)
//   //   }
//   // )

//   //   for(let product in this.products){
//   //       if((id+1)==this.products[product].id){
//   //         this.internalService.setSelectedItem(this.products[product]);
//   //       }else{}
  
//   //   }
//     location.reload();//placeholder
//   }
 
// }



