import { Injectable } from '@angular/core';
import { Item } from '../models/item';
import { Warehouse } from '../models/warehouse';
import { Product } from '../common/product';
import { InventoryDetailViewComponent } from '../inventory-detail-view/inventory-detail-view.component';
import { BehaviorSubject } from 'rxjs';


// const subject = new BehaviorSubject(_selectedItem:any);


@Injectable({
  providedIn: 'root'
})
export class InternalServiceService {

  selectedItem: any;
  public productSubject: BehaviorSubject<any>=new BehaviorSubject<any>({});//////////////////////

  constructor() { 
this.productSubject.next(this.selectedItem)/////////////////

  }


warehouseList:Warehouse[]=[];

selectedWareHouse: Warehouse= new Warehouse('','','','','','',[]);



setSelectedWareHouse(){
}


setSelectedItem(selectedItem:Product){
this.selectedItem=selectedItem;
console.log('set selected to'+JSON.stringify(selectedItem))

this.productSubject.next(this.selectedItem)

}
}
