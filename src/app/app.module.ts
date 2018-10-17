import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { AppRoutingModule } from './/app-routing.module';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { TermsNConditionsComponent } from './pages/terms-n-conditions/terms-n-conditions.component';
import { TermsOfSaleComponent } from './pages/terms-of-sale/terms-of-sale.component';
import { TermsOfPaymentComponent } from './pages/terms-of-payment/terms-of-payment.component';
import { DeliveryTermsNConditionsComponent } from './pages/delivery-terms-n-conditions/delivery-terms-n-conditions.component';
import { HowToShopComponent } from './pages/how-to-shop/how-to-shop.component';
import { AboutBirdNestComponent } from './pages/about-bird-nest/about-bird-nest.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    PrivacyPolicyComponent,
    TermsNConditionsComponent,
    TermsOfSaleComponent,
    TermsOfPaymentComponent,
    DeliveryTermsNConditionsComponent,
    HowToShopComponent,
    AboutBirdNestComponent,
    ContactUsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
