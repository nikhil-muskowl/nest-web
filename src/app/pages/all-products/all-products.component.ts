import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  public products: any[] = [];
  public totalRecords: any;
  public filteredRecords: any;

  constructor(
    private productsService: ProductsService,
  ) { 
    this.getAllProductsList();
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  getAllProductsList() {   
    this.products = [];

    this.productsService.getAllProducts().subscribe(
      response => {
        console.log(response);
        for (let index = 0; index < response.data.length; index++) {
          this.totalRecords = response.recordsTotal,
          this.filteredRecords = response.recordsFiltered,
          this.products.push({
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

    console.log(this.products);
  }

}
