import { Injectable } from '@angular/core';
import { ConfigService } from '../config-service.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
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

  public getAllCategories(): any {
    this.formData = new FormData();
    this.url = this.configService.url + 'product_module/api/categories_api';
    // this.formData.append('language_id', '2');
    return this.http.post(this.url,
      this.formData,
      {
        headers: this.headers,
      }
    );
  }

  public getCategoryDetail(id: Number): any {
    this.formData = new FormData();
    this.url = this.configService.url + 'product_module/api/categories_api/detail/'+ id;
    // this.formData.append('language_id', '2');
    return this.http.post(this.url,
      this.formData,
      {
        headers: this.headers,
      }
    );
  }

}
