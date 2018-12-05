import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog/blog.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  result;
  public types: any[] = [];
  public type_id;
  public blogs: any[] = [];
  public categories: any[] = [];
  public tags: any[] = [];
  public blogType: any;  

  constructor(
    private blogService: BlogService,
  ) {
    this.blogType = '';
    
    this.getBlogTypes();
    
    this.getBlogList();
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  getBlogTypes() {
    this.types = [];
    this.blogService.getTypes().subscribe(
      response => {
        
        for (let index = 0; index < response.data.length; index++) {         
          this.types.push({
            id: response.data[index].id,
            title: response.data[index].title,
            status: response.data[index].status,
            created_date: response.data[index].created_date,
            modified_date: response.data[index].modified_date
          });
        }
      },
      err => {
        console.error(err)
      },
    );   
        
  }

  changeType(type_id){    
    this.type_id = type_id;
    this.getBlogList();
  }

  getBlogList() {   
    this.blogs = [];
    this.categories = [];
    this.tags = [];
    this.blogService.getBlogs(this.type_id).subscribe(
      response => {
        console.log(response);
        for (let index = 0; index < response.data.length; index++) {
          this.blogs.push({
            id: response.data[index].id,
            title: response.data[index].title,
            description: response.data[index].description,
            user_name: response.data[index].user_name,
            user_image: response.data[index].user_image,
            user_image_thumb: response.data[index].user_image_thumb,
            image: response.data[index].image,
            image_thumb: response.data[index].image_thumb,
            banner: response.data[index].banner,
            banner_thumb: response.data[index].banner_thumb,
            tags: response.data[index].tags,
            categories: response.data[index].categories,
            status: response.data[index].status,
            created_date: response.data[index].created_date,
            modified_date: response.data[index].modified_date
          });
        }
      },
      err => {
        console.error(err)
      },
    );

    console.log(this.blogs);
  }

}
