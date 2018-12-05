import { Component, OnInit } from '@angular/core';
import { FaqService } from '../../services/faq/faq.service';
import { AccordionConfig } from 'ngx-bootstrap/accordion';

export function getAccordionConfig(): AccordionConfig {
  return Object.assign(new AccordionConfig(), { closeOthers: true });
}

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
  providers: [{ provide: AccordionConfig, useFactory: getAccordionConfig }]
})
export class FaqComponent implements OnInit {

  public faqs: any[] = [];
  public answers: any[] = [];

  constructor(
    private faqService: FaqService,
  ) { 
    this.getFaqList();
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  getFaqList() {
    this.faqs = [];
    this.answers = [];

    this.faqService.getFaqs().subscribe(
      response => {
       // this.faqs = response.data;
        for (let index = 0; index < response.data.length; index++) {         
          this.faqs.push({
            id: response.data[index].id,
            language_id: response.data[index].language_id,
            text: response.data[index].text,
            answers: response.data[index].answers,
          });
        }
      },
      err => {
        console.error(err)
      },
    );   
    console.log(this.faqs);
  }

}
