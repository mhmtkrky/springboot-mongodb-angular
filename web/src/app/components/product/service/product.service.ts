import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductEntity } from '../model/product.entity';
import { RegisterProduct } from '../../product-redirect-application/model/register.product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = 'http://localhost:8002/api/product/';

  constructor(private httpClient: HttpClient) { }

  public getList(): Observable<ProductEntity[]> {
    return this.httpClient.get<ProductEntity[]>(this.url);
  }

  public getById(id: number): Observable<ProductEntity> {
    return this.httpClient.get<ProductEntity>(this.url + id);
  }

  public create(model: ProductEntity): Observable<ProductEntity> {
    return this.httpClient.post<ProductEntity>(this.url, model);
  }

  public update(model: ProductEntity): Observable<ProductEntity> {
    return this.httpClient.put<ProductEntity>(this.url, model);
  }

  public delete(id: number): any {
    return this.httpClient.delete<ProductEntity>(this.url + id);
  }

  public register(model: RegisterProduct): Observable<ProductEntity> {
    return this.httpClient.post<ProductEntity>(this.url + 'register', model);
  }

  public deleteRegister(model: RegisterProduct): Observable<ProductEntity> {
    return this.httpClient.post<ProductEntity>(this.url + 'deleteRegistered', model);
  }
}
