import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories/categories.service';
import { ProductsService } from '../../services/products/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-product-detail',
  templateUrl: './category-product-detail.component.html',
  styleUrls: ['./category-product-detail.component.css']
})
export class CategoryProductDetailComponent implements OnInit {

  public categoryDetail: any[] = [];
  public cat_id: any;
  public categoryProducts: any[] = [];
  public totalRecords: any;
  public filteredRecords: any;
  public status: any;
  public catStatus: any;
  public message: any;
  public catMessage: any;

  constructor(
    private categoriesService: CategoriesService,
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) {
    let id = this.route.snapshot.paramMap.get('id');
    this.getCategoryDetail(id);
   }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  getCategoryDetail(id) {   
    this.categoryDetail = [];
    this.categoryProducts = [];

    this.categoriesService.getCategoryDetail(id).subscribe(
      response => {
        this.catStatus = response.status;
        this.catMessage = response.message;
        this.categoryDetail = response.result;
        this.cat_id = response.result.id;
        if(this.cat_id){
          this.productsService.getCategoryProducts(this.cat_id).subscribe(
            response => {
              for (let index = 0; index < response.data.length; index++) {
                this.totalRecords = response.recordsTotal;
                this.filteredRecords = response.recordsFiltered;
                this.categoryProducts.push({
                  id: response.data[index].id,
                  title: response.data[index].title,
                  description: response.data[index].description,
                  price: response.data[index].price,
                  quantity: response.data[index].quantity,
                  image: response.data[index].image,
                  image_thumb: response.data[index].image_thumb,
                  banner: response.data[index].banner,
                  banner_thumb: response.data[index].banner_thumb,
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
        } else {
          console.log('No categories found!');
        }
      },
      err => {
        console.error(err)
      },
    );
  }

}
