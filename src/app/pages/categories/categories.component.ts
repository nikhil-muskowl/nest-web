import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  public categories: any[] = [];
  public childrens: any[] = [];
  public type_id;

  constructor(
    private categoriesService: CategoriesService,
  ) {
    this.getCategoryList();
   }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  changeType(type_id){    
    this.type_id = type_id;
    this.getCategoryList();
  }

  getCategoryList() {   
    this.categories = [];
    this.childrens = [];
    this.categoriesService.getAllCategories().subscribe(
      response => {
        console.log(response);
        for (let index = 0; index < response.data.length; index++) {
          this.categories.push({
            id: response.data[index].id,
            title: response.data[index].title,
            description: response.data[index].description,
            image: response.data[index].image,
            image_thumb: response.data[index].image_thumb,
            banner: response.data[index].banner,
            banner_thumb: response.data[index].banner_thumb,
            childrens: response.data[index].childrens,
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
    console.log(this.categories);
  }

}
