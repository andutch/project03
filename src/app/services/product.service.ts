import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../common/product';
import { ProductWarehouse } from '../common/product-warehouse';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:8080/api/products';
  private warehouseUrl = 'http://localhost:8080/api/product-warehouse';

  //http://localhost:8080/api/products?size=100 return 100 instead of default 20 for 
  //spring rest, quick fix

  constructor(private httpClient: HttpClient) { }



  getProductList(theWarehouseId: number): Observable<Product[]>{
console.log("get prods in service")
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
  deleteProduct(productID: number){
    console.log("delete prod " +productID)
        const deleteUrl=`${this.baseUrl}/${productID}`;
        console.log("delete url " +deleteUrl)
    
        this.httpClient.delete(deleteUrl).subscribe((data)=>{
          console.log("success delete");})

        /////////////////////// need refresh observable
      }

      updateProduct(productID: number){

        console.log("update prod " +productID)
        const updateUrl=`${this.baseUrl}/${productID}`;
        console.log("update url " +updateUrl)
    
        this.httpClient.put(updateUrl, {"id":`${productID}`, "sku": "blah",
        "name": "Crash Course in Python"}).subscribe((data)=>{
          console.log("success update");})
      }

      createProduct(){

        console.log("create prod ")
        const createProductUrl=`${this.baseUrl}/`;
        
        this.httpClient.post(createProductUrl, { "id":101,
        "sku": "blah",
        "name": "Crash Course in Python",
        "active":true,
        
            "warehouse": {
                "warehouse": "http://localhost:8080/api/product-warehouse/1"
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