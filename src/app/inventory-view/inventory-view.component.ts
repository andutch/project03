import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-inventory-view',
  // templateUrl: './product-list.component.html',
  // templateUrl: './product-list-table.component.html',
  templateUrl: './inventory-view-grid.component.html',
  styleUrls: ['./inventory-view.component.css']
})
export class InventoryViewComponent implements OnInit{

  products: Product[]=[];

  constructor(private productService:ProductService){}

  ngOnInit():void{
    this.listProducts();
  }


  listProducts() {
    this.productService.getProductList().subscribe(
      data=>{
        this.products=data; //assigns results to product array
      }
    )
  }

}
