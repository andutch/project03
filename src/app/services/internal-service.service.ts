import { Injectable } from '@angular/core';
import { Warehouse } from '../models/warehouse';

@Injectable({
  providedIn: 'root'
})
export class InternalServiceService {

  constructor() { }

warehouseList:Warehouse[]=[];
selectedWareHouse: Warehouse= new Warehouse('','','','','','',[]);



}
