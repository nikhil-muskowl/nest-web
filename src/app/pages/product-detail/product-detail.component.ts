import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  public products: any[] = [];
  public images: any[] = [];
  public status: any;
  public message: any;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) { 
    let id = this.route.snapshot.paramMap.get('id');
    this.getProductDetail(id);
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  getProductDetail(id) {   
    this.products = [];
    this.images = [];
    this.productsService.getProductDetail(id).subscribe(
      response => {
          this.status = response.status,
          this.message = response.message,
          this.products = response.result;
          console.log(response);
          console.log(this.status);
          console.log(this.products);
      },
      err => {
        console.error(err)
      },
    );
    console.log(this.products);
  }

}
