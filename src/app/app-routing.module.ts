import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { TermsNConditionsComponent } from './pages/terms-n-conditions/terms-n-conditions.component';
import { TermsOfSaleComponent } from './pages/terms-of-sale/terms-of-sale.component';
import { TermsOfPaymentComponent } from './pages/terms-of-payment/terms-of-payment.component';
import { DeliveryTermsNConditionsComponent } from './pages/delivery-terms-n-conditions/delivery-terms-n-conditions.component';
import { HowToShopComponent } from './pages/how-to-shop/how-to-shop.component';
import { AboutBirdNestComponent } from './pages/about-bird-nest/about-bird-nest.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { BlogDetailComponent } from './pages/blog-detail/blog-detail.component';
import { FaqComponent } from './pages/faq/faq.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { CategoryProductDetailComponent } from './pages/category-product-detail/category-product-detail.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { AllProductsComponent } from './pages/all-products/all-products.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'terms-n-condision', component: TermsNConditionsComponent },
  { path: 'terms-of-sale', component: TermsOfSaleComponent },
  { path: 'terms-of-payment', component: TermsOfPaymentComponent },
  { path: 'delivery-terms-n-conditions', component: DeliveryTermsNConditionsComponent },
  { path: 'how-to-shop', component: HowToShopComponent },
  { path: 'about-bird-nest', component: AboutBirdNestComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'blog-detail/:id', component: BlogDetailComponent },
  { path: 'faqs', component: FaqComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'category-detail', component: CategoryProductDetailComponent },
  { path: 'category-detail/:id', component: CategoryProductDetailComponent },
  { path: 'product-detail/:id', component: ProductDetailComponent },
  { path: 'all-products', component: AllProductsComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      routes,
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
