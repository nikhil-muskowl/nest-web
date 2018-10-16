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
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
