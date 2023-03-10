import { Component, OnInit } from '@angular/core';
import { InternalServiceService } from '../services/internal-service.service';
import { Router } from '@angular/router';

import { DetailViewComponent } from '../detail-view/detail-view.component';
import { ProductWarehouse } from '../common/product-warehouse';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-warehouse-view',
  templateUrl: './warehouse-view.component.html',
  styleUrls: ['./warehouse-view.component.css']
})



export class WarehouseViewComponent{


  productWarehouses: ProductWarehouse[]=[];

  constructor(private internalService: InternalServiceService, private router: Router, private productService: ProductService){
    this.listProductWarehouses();

  };



  listProductWarehouses() {
    this.productService.getProductWarehouses().subscribe(
      data=>{
        console.log('Product Warehouses='+JSON.stringify(data));
        this.productWarehouses=data;
        this.internalService.wareHouseSubject.next(this.productWarehouses[0]);
      }
    );

  }


//   showDetailView(id:string):void{

//     for(let warehouse in this.warehouseList){
//       if(id===this.warehouseList[warehouse].warehouseId){
//         console.log("found ID"+id)
//       this.internalService.selectedWareHouse=this.warehouseList[warehouse];
  
//         console.log(this.internalService.selectedWareHouse.warehouseId)
//     }
//   }
//     this.router.navigate([{outlets:{'aux1':['inventory-detail-view']}}])
//     this.router.navigate([{outlets:{'aux1':['warehouse-detail-view']}}])
    

// }

setSelectedWarehouse(id:number){

  for(let warehouse in this.productWarehouses){
    if(id==this.productWarehouses[warehouse].id){
      this.internalService.setSelectedWareHouse(this.productWarehouses[warehouse]);
      console.log("set wh "+id)
    }else{}
}

}

// openLink() {
//   this.router.navigateByUrl('warehouse/'+this.currentWarehouseId+'(aux1:inventory-detail-view)');
// }
}
