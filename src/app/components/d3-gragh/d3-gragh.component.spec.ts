import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3GraghComponent } from './d3-gragh.component';

describe('D3GraghComponent', () => {
  let component: D3GraghComponent;
  let fixture: ComponentFixture<D3GraghComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D3GraghComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3GraghComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
