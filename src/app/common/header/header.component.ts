import { Component, OnInit, Directive, ElementRef, HostListener } from '@angular/core';
import { CategoriesService } from '../../services/categories/categories.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public categories: any[] = [];
  public childrens: any[] = [];
  public totalRecords: any;
  public filteredRecords: any;

  constructor(
    private ele: ElementRef, 
    private categoriesService: CategoriesService,
    ) {
      this.getCategoryList();
     }

  @HostListener('window:scroll', [''])
  @HostListener('mousewheel', ['$event'])
  onMousewheel(event) {

   
    if (window.pageYOffset > 100) {
      document.getElementById("navbar").style.background = "#fff";
      document.getElementById("navbar").className = "navbar navbar-expand-lg fixed-top navbar-light";
    } else {
      document.getElementById("navbar").style.background = "transparent";
      document.getElementById("navbar").className = "navbar navbar-expand-lg fixed-top navbar-dark";
    }   

  }

  ngOnInit() {
  }

  getCategoryList() {   
    this.categories = [];
    this.childrens = [];
    this.categoriesService.getAllCategories().subscribe(
      response => {
        for (let index = 0; index < response.data.length; index++) {
          this.totalRecords = response.recordsTotal;
          this.filteredRecords = response.recordsFiltered;
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
  }

}
