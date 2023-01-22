import { Injectable } from '@angular/core';

// import { Warehouse } from '../models/warehouse';
import { Product } from '../common/product';
import { ProductWarehouse } from '../common/product-warehouse';
import { InventoryDetailViewComponent } from '../inventory-detail-view/inventory-detail-view.component';
import { BehaviorSubject } from 'rxjs';
import { InventoryViewComponent } from '../inventory-view/inventory-view.component';
import { ProductService } from './product.service';


// const subject = new BehaviorSubject(_selectedItem:any);


@Injectable({
  providedIn: 'root'
})
export class InternalServiceService {

  selectedItem: any;
  public productSubject: BehaviorSubject<any>=new BehaviorSubject<any>({});//////////////////////
  public wareHouseSubject: BehaviorSubject<any>=new BehaviorSubject<any>({});//////////////////////

  constructor(private productService: ProductService) { 
this.productSubject.next(this.selectedItem)/////////////////
this.wareHouseSubject.next(this.selectedWareHouse)/////////////////

  }

selectedWareHouse:ProductWarehouse=new ProductWarehouse(1,'','');
selectedWareHouseId:number=1;

productWarehouses: ProductWarehouse[]=[];

setSelectedWareHouse(selectedWareHouse:ProductWarehouse){
  this.selectedWareHouse=selectedWareHouse;
  this.selectedWareHouseId=selectedWareHouse.id;
  //console.log('set selected to'+JSON.stringify(selectedWareHouse))
  this.wareHouseSubject.next(this.selectedWareHouse)
}


setSelectedItem(selectedItem:Product){
this.selectedItem=selectedItem;
// console.log('set selected to'+JSON.stringify(selectedItem))
this.productSubject.next(this.selectedItem)
// this.wareHouseSubject.next(this.selectedWareHouse)

}


advanceSelectedItem(){
  
  this.productService.getProductWarehouses().subscribe(
    data=>{
      console.log('Product Warehouses='+JSON.stringify(data));
      this.productWarehouses=data;
      // this.wareHouseSubject.next(this.productWarehouses[0]);
    }
    );
 
  // console.log('advance selected to ware house'+this.selectedWareHouse)
  this.selectedWareHouse=this.productWarehouses[0];

  this.wareHouseSubject.next(this.selectedWareHouse);
  }



  setZeroth(){

    let products:any;
    this.wareHouseSubject.subscribe(data=>{
      products=data;})
console.count("product0= "+products[0])
    this.productSubject.next(products[0]);
  }
  
}
