import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../common/product';
import { ProductWarehouse } from '../common/product-warehouse';
import { InternalServiceService } from './internal-service.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:8080/api/products';
  private baseUrlMax = 'http://localhost:8080/api/products?size=100';//return 100 instead of default 20 for spring 
  private warehouseUrl = 'http://localhost:8080/api/product-warehouse';


  constructor(private httpClient: HttpClient) { }

  testVar:Product[]=[];

  getProductList(theWarehouseId: number): Observable<Product[]>{
    const searchUrl=`${this.baseUrl}/search/findByWarehouseId?id=${theWarehouseId}`;

    return this.httpClient.get<GetResponse>(searchUrl).pipe(
      map(response=> response._embedded.products)
    );
  }

  getProductWarehouses(): Observable<ProductWarehouse[]> {
    return this.httpClient.get<GetResponseProductWarehouse>(this.warehouseUrl).pipe(
      map(response=> response._embedded.productWarehouse)
    );
  }
///////////////
  async deleteProduct(productID: number){
    console.log("delete prod " +productID)
        const deleteUrl=`${this.baseUrl}/${productID}`;
        console.log("delete url " +deleteUrl)
    
       await this.httpClient.delete(deleteUrl).subscribe((data)=>{
          console.log("success delete");})

        /////////////////////// need refresh observable
      }

  
      updateProduct(selectedItem: Product){

        console.log("update prod " +selectedItem)
        const updateUrl=`${this.baseUrl}/${selectedItem.id}`;
        console.log("update url " +updateUrl)
    
      this.httpClient.put(updateUrl, selectedItem).subscribe((data)=>{
          console.log("success update");})
      }

     async createProduct(warehouseID:number){

        console.log("create prod ")
        const createProductUrl=`${this.baseUrl}/`;


    await  this.httpClient.get<GetResponse>(this.baseUrlMax).pipe(
          map(response=> response._embedded.products)
        ).subscribe(data=>{this.testVar=data;});

        console.log("test var"+this.testVar);
        console.log("test var size"+this.testVar.length);
        
        this.httpClient.post(createProductUrl, { 
        "sku": "blank",
        "name": "blank",
        "active":true,
        "unitPrice": 0.00,
        "description":'',
        "imageUrl":'assets/images/products/generic-0000.png',
            "warehouse": {
                "warehouse": `http://localhost:8080/api/product-warehouse/${warehouseID}`
            }}).subscribe((data)=>{
          console.log("success update");})
      }
  
}

interface GetResponse { //video 58
  _embedded: {
    products: Product[];
  }
}

interface GetResponseProductWarehouse{ 
  _embedded: {
    productWarehouse: ProductWarehouse[];
  }
}