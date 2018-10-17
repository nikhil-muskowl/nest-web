import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { FormServiceService } from '../../services/form-service.service';
import { InquiryServiceService } from '../../services/inquiry-service.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  public contactForm: FormGroup;

  public responseData;

  public status;
  public msgSuccess;
  public msgWarning;
  public message;

  public name: string;
  public email: string;
  public contact: string;
  public inquiry: string;

  public formErrors = {
    name: '',
    email: '',
    contact: '',
    inquiry: '',
  };

  constructor(
    private formBuilder: FormBuilder,
    private formService: FormServiceService,
    private inquiryService: InquiryServiceService,
    private router: Router
  ) { 
    this.name = '';
    this.email = '';
    this.contact = '';
    this.inquiry = '';
    this.createForm();
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  public createForm() {
    this.contactForm = this.formBuilder.group({
      name: [this.name, Validators.compose([
        Validators.required
      ])],
      email: [this.email,
      Validators.compose([
        Validators.required,
      ])],
      contact: [this.contact,
        Validators.compose([
          Validators.required,
        ])],
        inquiry: [this.inquiry,
        Validators.compose([
          Validators.required,
        ])],
    });

    this.contactForm.valueChanges.subscribe((data) => {
      this.formErrors = this.formService.validateForm(this.contactForm, this.formErrors, true)
    });
  }
  
  submitForm() {
    // mark all fields as touched
    this.formService.markFormGroupTouched(this.contactForm);
    if (this.contactForm.valid) {
 
      this.inquiryService.sendDetails(this.contactForm.value).subscribe(
        response => {
          this.responseData = response;
 
          this.status = this.responseData.status;
          this.message = this.responseData.message;
 
          if (!this.status) {
            this.msgWarning = 'Something went wrong please try again later!';
            if (this.responseData.result) {
               this.responseData.result.forEach(element => {
                 if (element.id == 'name') {
                   this.formErrors.name = element.text
                 }
                 if (element.id == 'email') {
                   this.formErrors.email = element.text
                 }
                 if (element.id == 'contact') {
                   this.formErrors.contact = element.text
                 }
                 if (element.id == 'inquiry') {
                   this.formErrors.inquiry = element.text
                 }
              });
            }
          } else {
            this.msgSuccess = 'Your message has been successfully sent!';
            this.contactForm.reset();
           //  this.inquiryService.setData(this.responseData.result);
           //  this.router.navigate(['/my-account']);
          }
 
         
        },
        err => {
          console.error(err);
        }
      );
 
    } else {
      this.formErrors = this.formService.validateForm(this.contactForm, this.formErrors, false);  
    }
   }

}
