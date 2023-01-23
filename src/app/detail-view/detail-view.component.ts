import { Component } from '@angular/core';

import { Router } from '@angular/router';
// import { Warehouse } from '../models/warehouse';
import { InternalServiceService } from '../services/internal-service.service';
import { ProductWarehouse } from '../common/product-warehouse';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})
export class DetailViewComponent {

  constructor(private internalService: InternalServiceService, private router: Router){
    this.internalService.wareHouseSubject.subscribe(value=>{this.selectedWarehouse=value;});
    this.getSelected();
  };
  
  ngOnInit():void{
   
    }
  

selectedWarehouse:any=1;


getSelected(){
 
  console.log('get selected in detail view!!')
  this.internalService.wareHouseSubject.subscribe(value=>{this.selectedWarehouse=value;});
  }


}
