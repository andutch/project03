import { Component, OnInit } from '@angular/core';
import { InternalServiceService } from '../services/internal-service.service';
import { Router } from '@angular/router';
import { WAREHOUSES } from '../models/example-warehouse';
import { DetailViewComponent } from '../detail-view/detail-view.component';
import { ProductWarehouse } from '../common/product-warehouse';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-warehouse-view',
  templateUrl: './warehouse-view.component.html',
  styleUrls: ['./warehouse-view.component.css']
})



export class WarehouseViewComponent implements OnInit{


  productWarehouses: ProductWarehouse[]=[];

  constructor(private internalService: InternalServiceService, private router: Router, private productService: ProductService){

  };

  ngOnInit(): void {
    this.listProductWarehouses();
    }

  warehouseList=this.internalService.warehouseList;

  listProductWarehouses() {
    this.productService.getProductWarehouses().subscribe(
      data=>{
        console.log('Product Warehouses='+JSON.stringify(data));
        this.productWarehouses=data;
      }
    );
  }

  populateWarehouseExamples():void{
    for(let warehouse in WAREHOUSES ){
      this.warehouseList.push(WAREHOUSES[warehouse])
    }
  }


  showDetailView(id:string):void{

    for(let warehouse in this.warehouseList){
      if(id===this.warehouseList[warehouse].warehouseId){
        console.log("found ID"+id)
      this.internalService.selectedWareHouse=this.warehouseList[warehouse];
        // this.taskList.push(this.completedTaskList[task]);
        // this.completedTaskList.splice(task,1);}
        console.log(this.internalService.selectedWareHouse.warehouseId)
    }
  }
    this.router.navigate([{outlets:{'aux1':['inventory-detail-view']}}])
    this.router.navigate([{outlets:{'aux1':['warehouse-detail-view']}}])
    

}
}
