import { Injectable } from '@angular/core';
import { ConfigService } from '../config-service.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FaqService {
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

  public getFaqs(): any {
    this.formData = new FormData();
    this.url = this.configService.url + 'faq_module/api/faqs_api';
    this.formData.append('language_id', '1');
    return this.http.post(this.url,
      this.formData,
      {
        headers: this.headers,
      }
    );
  }

}
