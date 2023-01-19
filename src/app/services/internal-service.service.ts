import { Injectable } from '@angular/core';
import { Item } from '../models/item';
// import { Warehouse } from '../models/warehouse';
import { Product } from '../common/product';
import { ProductWarehouse } from '../common/product-warehouse';
import { InventoryDetailViewComponent } from '../inventory-detail-view/inventory-detail-view.component';
import { BehaviorSubject } from 'rxjs';
import { InventoryViewComponent } from '../inventory-view/inventory-view.component';


// const subject = new BehaviorSubject(_selectedItem:any);


@Injectable({
  providedIn: 'root'
})
export class InternalServiceService {

  selectedItem: any;
  public productSubject: BehaviorSubject<any>=new BehaviorSubject<any>({});//////////////////////
  public wareHouseSubject: BehaviorSubject<any>=new BehaviorSubject<any>({});//////////////////////

  constructor() { 
this.productSubject.next(this.selectedItem)/////////////////
this.wareHouseSubject.next(this.selectedWareHouse)/////////////////

  }


// warehouseList:Warehouse[]=[];

selectedWareHouse:any;



setSelectedWareHouse(selectedWareHouse:ProductWarehouse){
  this.selectedWareHouse=selectedWareHouse;
console.log('set selected to'+JSON.stringify(selectedWareHouse))

this.wareHouseSubject.next(this.selectedWareHouse)
}


setSelectedItem(selectedItem:Product){
this.selectedItem=selectedItem;
console.log('set selected to'+JSON.stringify(selectedItem))

this.productSubject.next(this.selectedItem)
// this.wareHouseSubject.next(this.selectedWareHouse)


}
/////////////////
advanceSelectedItem(){
 
  console.log('advance selected to')
  
  


  
  }


}
