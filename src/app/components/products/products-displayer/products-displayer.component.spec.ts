import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsDisplayerComponent } from './products-displayer.component';

describe('ProductsDisplayerComponent', () => {
  let component: ProductsDisplayerComponent;
  let fixture: ComponentFixture<ProductsDisplayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsDisplayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
