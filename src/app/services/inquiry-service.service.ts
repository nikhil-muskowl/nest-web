import { Injectable } from '@angular/core';
import { ConfigService } from "../services/config-service.service";
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InquiryServiceService {

  public headers = new HttpHeaders();
  public formData: FormData = new FormData();
  public responseData: any;
  private URL;

  public name;
  public email;
  public contact;
  public inquiry;

  constructor(
    public http: HttpClient,
    private configService: ConfigService
  ) { 
    this.headers.set('Access-Control-Allow-Origin ', '*');
    this.headers.set('Content-Type', 'application/json; charset=utf-8');
  }

  public sendDetails(data: any) {
    this.formData = new FormData();
    this.URL = this.configService.url + 'inquiry_module/api/inquiries_api/save';

    this.formData.append('name', data.name);
    this.formData.append('email', data.email);
    this.formData.append('contact', data.contact);
    this.formData.append('inquiry', data.inquiry);

    return this.http.post(this.URL,
        this.formData,
        {
            headers: this.headers,
        }
    );
}

}
