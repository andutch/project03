import { Component, OnInit,OnChanges } from '@angular/core';
import { Product } from '../common/product';
import { Item } from '../models/item';
import { InternalServiceService } from '../services/internal-service.service';
import { ProductService } from '../services/product.service';
import { InventoryViewComponent } from '../inventory-view/inventory-view.component';

@Component({
  selector: 'app-inventory-detail-view',
  templateUrl: './inventory-detail-view.component.html',
  styleUrls: ['./inventory-detail-view.component.css']
})
export class InventoryDetailViewComponent implements OnInit{


constructor(private internalService:InternalServiceService, private productService:ProductService){
  this.internalService.productSubject.subscribe(value=>{this.selectedItem=value;});
  this.getSelected();
}

ngOnInit():void{

  this.getSelected();
  }


  selectedItem:any;
// this.internalService.productSubject.subscribe(value=>{this.selectedItem=value;});
//this.internalService.productSubject.subscribe();

  getSelected(){
// this.selectedItem=this.internalService.selectedItem;
console.log('get selected in inv detail view!!')
this.internalService.productSubject.subscribe(value=>{this.selectedItem=value;});
}



}
