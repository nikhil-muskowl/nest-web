import { Injectable } from '@angular/core';
import { ConfigService } from '../config-service.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
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

  public getTypes(): any {
    this.formData = new FormData();
    this.url = this.configService.url + 'blog_module/api/blog_types_api';
    this.formData.append('language_id', '1');
    return this.http.post(this.url,
      this.formData,
      {
        headers: this.headers,
      }
    );
  }

  public getBlogs(type_id): any {
    this.formData = new FormData();
    this.url = this.configService.url + 'blog_module/api/blogs_api';
    if(type_id){
      this.formData.append('blog_type_id', type_id);
    }
    
    this.formData.append('language_id', '1');
    return this.http.post(this.url,
      this.formData,
      {
          headers: this.headers,
      }
  );
  }

  public getBlogDetail(id: Number): any {
    return this.http.get(this.configService.url + 'blog_module/api/blogs_api/detail/' + id);
  }

}
