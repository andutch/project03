import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-inventory-view',
  // templateUrl: './product-list.component.html',
  // templateUrl: './product-list-table.component.html',
  templateUrl: './inventory-view-grid.component.html',
  styleUrls: ['./inventory-view.component.css']
})
export class InventoryViewComponent implements OnInit{

  products: Product[]=[];
  currentWarehouseId: number=3;

  constructor(private productService:ProductService,
              private route: ActivatedRoute, private router:Router){}

  ngOnInit():void{
    this.route.paramMap.subscribe(()=>{
      this.listProducts();
    })
    this.listProducts();
  }


  listProducts() {
    
    const hasWarehouseId: boolean=this.route.snapshot.paramMap.has('id')


    if (hasWarehouseId){
      //get id by number
      this.currentWarehouseId=+this.route.snapshot.paramMap.get('id')!;//! non-null assertion operator
      console.log("id ="+this.currentWarehouseId )
    }
    else{
      //set default
      console.log("warehouse no id" )
      this.currentWarehouseId=2;////////////////uncomment, set route
    }


    this.productService.getProductList(this.currentWarehouseId).subscribe(
      data=>{
        this.products=data; //assigns results to product array
        console.log("subsripption in inventory view")
      }
    )
  }

  openLink() {
    this.router.navigateByUrl('warehouse/'+this.currentWarehouseId+'(aux1:inventory-detail-view)');
}
}
