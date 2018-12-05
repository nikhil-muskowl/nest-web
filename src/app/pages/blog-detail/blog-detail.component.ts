import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog/blog.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {

  public loading = false;
  public details: any[] = [];
  public categories: any[] = [];
  public tags: any[] = [];
  public images: any[] = [];

  constructor(
    private blogService: BlogService,  private route: ActivatedRoute
  ) { 
    let id = this.route.snapshot.paramMap.get('id');
    this.getBlogDetail(id);
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  public getBlogDetail(id) {
    this.details = [];
    this.categories = [];
    this.tags = [];
    this.images = [];
    this.loading = true;

    this.blogService.getBlogDetail(id).subscribe(
      response => {
        this.loading = false;
        this.details = response.result;
      },
      err => {
        this.loading = false;
        console.error(err)
      }      
    );
    return id;
  }

}
