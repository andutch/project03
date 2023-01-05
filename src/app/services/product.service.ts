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