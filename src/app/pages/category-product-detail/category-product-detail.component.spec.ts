import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryProductDetailComponent } from './category-product-detail.component';

describe('CategoryProductDetailComponent', () => {
  let component: CategoryProductDetailComponent;
  let fixture: ComponentFixture<CategoryProductDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryProductDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
