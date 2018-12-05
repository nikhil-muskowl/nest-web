import { Injectable } from '@angular/core';
import { ConfigService } from '../config-service.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public headers = new HttpHeaders();
  public formData: FormData = new FormData();
  public responseData: any;
  private url;

  constructor(
    private http: HttpClient, 
    private configService: ConfigService 
  ) { 
    this.headers.set('Access-Control-Allow-Origin ', '*');
    this.headers.set('Content-Type', 'application/json; charset=utf-8');
  }

  public getAllProducts(): any {
    this.formData = new FormData();
    this.url = this.configService.url + 'product_module/api/products_api';
    this.formData.append('language_id', '2');
    // this.formData.append('search[value]', 'a');
    return this.http.post(this.url,
      this.formData,
      {
        headers: this.headers,
      }
    );
  }

  public getCategoryProducts(id: Number): any {
    this.formData = new FormData();
    this.url = this.configService.url + 'product_module/api/products_api/'+ id;
    this.formData.append('language_id', '2');
    // this.formData.append('search[value]', 'a');
    return this.http.post(this.url,
      this.formData,
      {
        headers: this.headers,
      }
    );
  }

  public getProductDetail(id: Number): any {
    this.formData = new FormData();
    this.url = this.configService.url + 'product_module/api/products_api/detail/'+ id;
    this.formData.append('language_id', '2');
    return this.http.post(this.url,
      this.formData,
      {
        headers: this.headers,
      }
    );
  }

}
