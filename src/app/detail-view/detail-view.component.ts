import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { Warehouse } from '../models/warehouse';
import { InternalServiceService } from '../services/internal-service.service';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})
export class DetailViewComponent {

  constructor(private internalService: InternalServiceService, private router: Router){

  };

  
wareHouse=this.internalService.selectedWareHouse;


updateWarehouse(wareHouse:Warehouse){
this.wareHouse=wareHouse;
}



}
