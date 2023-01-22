import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { InternalServiceService } from '../services/internal-service.service';

@Component({
  selector: 'app-inventory-view',
  // templateUrl: './product-list.component.html',
  // templateUrl: './product-list-table.component.html',
  templateUrl: './inventory-view-grid.component.html',
  styleUrls: ['./inventory-view.component.css']
})
export class InventoryViewComponent implements OnInit{

  products: Product[]=[];
 
  currentWarehouseId: any;
  currentWarehouse: any;

  interval:any;
  

  constructor(private productService:ProductService,
              private route: ActivatedRoute, private router:Router, private internalService:InternalServiceService){

                //added 21 Jan// not working
     this.internalService.wareHouseSubject.subscribe(value=>{this.currentWarehouse=value;}); //changed from currentWhid
    //  this.listProducts();
    this.currentWarehouseId=this.internalService.selectedWareHouseId;
    this.listProducts();
    
              }

  ngOnInit():void{
  this.currentWarehouseId=this.internalService.selectedWareHouseId;

  this.interval = setInterval(() => { 
  this.listProductsInterval(); 
  }, 500);
  }

  
  listProducts() {

    this.currentWarehouseId=this.internalService.selectedWareHouseId;


    this.productService.getProductList(this.currentWarehouseId).subscribe(
      data=>{
        this.products=data; //assigns results to product array

        //this.internalService.selectedItem=this.products[0];//
        this.internalService.productSubject.next(this.products[0]);//sets a default product as first one

        this.router.navigateByUrl('warehouse/'+this.currentWarehouseId+'(aux1:inventory-detail-view)');
/////////////////////////////////
        console.log("subsripption in inventory view")
      }
      
    )
  
  }
  listProductsInterval() {
    
    // const hasWarehouseId: boolean=this.route.snapshot.paramMap.has('id')
    this.currentWarehouseId=this.internalService.selectedWareHouseId;
  
    // if (hasWarehouseId){

    // console.log("this current id before if statement"+this.currentWarehouseId);
    //   this.currentWarehouseId=+this.route.snapshot.paramMap.get('id')!;//! non-null assertion operator
    //   this.internalService.selectedWareHouseId=this.currentWarehouseId;
    //   console.log("this current id in if statement"+this.currentWarehouseId);

    // //   this.internalService.selectedWareHouse=+this.route.snapshot.paramMap.get('id')!;//! non-null assertion operator added han19th not sure if working
    // // //   console.log("id of listing wh="+this.currentWarehouseId )
    
    // }
    // else{
    //   //set default
    //   console.log("warehouse no id" )
    //   this.currentWarehouseId=2;////////////////uncomment, set route
    // }


    this.productService.getProductList(this.currentWarehouseId).subscribe(
      data=>{
        this.products=data; //assigns results to product array

      //  this.internalService.selectedItem=this.products[0];//

      console.log(this.internalService.productSubject.value)
      // if (this.internalService.productSubject.value!=null){
      //  this.internalService.productSubject.next(this.products[0]);//sets a default product as first one//!!for interval timer
      // }

 
      }
    )
    
  }
  openLink() {
    this.router.navigateByUrl('warehouse/'+this.currentWarehouseId+'(aux1:inventory-detail-view)');
    // this.router.navigateByUrl('warehouse/'+this.currentWarehouseId+'(aux1:warehouse-detail-view)');
    console.log('change page1')
    // this.router.navigateByUrl('warehouse/'+this.currentWarehouseId+'(aux1:inventory-detail-view)');
   
}

public setSelectedItem(sku: string){

  for(let product in this.products){
      if(sku==this.products[product].sku){
        this.internalService.setSelectedItem(this.products[product]);
      }else{}
  }
  // this.internalService.setSelectedItem(sku);
}

}
