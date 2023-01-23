import { Component, OnInit, SimpleChanges, HostListener } from '@angular/core';
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
    //  this.internalService.wareHouseSubject.subscribe(value=>{this.currentWarehouse=value;}); //changed from currentWhid
  
    this.currentWarehouseId=this.internalService.selectedWareHouseId;


  this.products=this.internalService.fetchProducts(this.internalService.selectedWareHouseId);
                
   this.internalService.listSubject.subscribe(data=>{this.products=data;});//new
  //  this.internalService.listSubject.subscribe();//new

    this.listProducts();
    
              }

  ngOnInit():void{
  this.currentWarehouseId=this.internalService.selectedWareHouseId;
  
  // this.products= this.internalService.fetchProducts(this.internalService.selectedWareHouseId);
  this.internalService.listSubject.subscribe(data=>{this.products=data;});
  this.listProducts();

  // this.interval = setInterval(() => { 
  // this.listProductsInterval(); 
  // }, 500);
  }

  // document.body.addEventListener('click',  listProducts()); 
  @HostListener('document:click', ['$event'])
  documentClick(event: MouseEvent) {
    this.listProductsInterval() 
}
  
  listProducts() {

    this.currentWarehouseId=this.internalService.selectedWareHouseId;

    this.internalService.listSubject.subscribe(data=>{this.products=data;});//
    this.products=this.internalService.fetchProducts(this.internalService.selectedWareHouseId);

    this.productService.getProductList(this.currentWarehouseId).subscribe(
      data=>{
        this.products=data; //assigns results to product array

      
        this.internalService.productSubject.next(this.products[0]);//sets a default product as first one

        this.router.navigateByUrl('warehouse/'+this.currentWarehouseId+'(aux1:inventory-detail-view)');//auxilary router redirect

    //     console.log("subsripption in inventory view")
      }
      
    )
  
  }
  listProductsInterval() {
    

    this.currentWarehouseId=this.internalService.selectedWareHouseId;
  
    // this.products=this.internalService.fetchProducts(this.internalService.selectedWareHouseId);


    this.productService.getProductList(this.currentWarehouseId).subscribe(
      data=>{
        this.products=data; //assigns results to product array

      console.log(this.internalService.productSubject.value)
    
      }
    )
    
  }
  openLink() {
    this.router.navigateByUrl('warehouse/'+this.currentWarehouseId+'(aux1:inventory-detail-view)');

    console.log('change page1') 
}

public setSelectedItem(sku: string){

  for(let product in this.products){
      if(sku==this.products[product].sku){
        this.internalService.setSelectedItem(this.products[product]);
      }else{}
  }
 
}

}
