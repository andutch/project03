import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../common/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:8080/api/products';
  //http://localhost:8080/api/products?size=100 return 100 instead of default 20 for 
  //spring rest, quick fix

  constructor(private httpClient: HttpClient) { }

  getProductList(): Observable<Product[]>{

    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response=> response._embedded.products)
    );

  }
}

interface GetResponse { //video 58
  _embedded: {
    products: Product[];
  }
}