import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryTermsNConditionsComponent } from './delivery-terms-n-conditions.component';

describe('DeliveryTermsNConditionsComponent', () => {
  let component: DeliveryTermsNConditionsComponent;
  let fixture: ComponentFixture<DeliveryTermsNConditionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryTermsNConditionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryTermsNConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
