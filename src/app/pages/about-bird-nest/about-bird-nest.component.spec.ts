import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutBirdNestComponent } from './about-bird-nest.component';

describe('AboutBirdNestComponent', () => {
  let component: AboutBirdNestComponent;
  let fixture: ComponentFixture<AboutBirdNestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutBirdNestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutBirdNestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
