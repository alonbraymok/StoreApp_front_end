import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealTimeMessageComponent } from './real-time-message.component';

describe('RealTimeMessageComponent', () => {
  let component: RealTimeMessageComponent;
  let fixture: ComponentFixture<RealTimeMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealTimeMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealTimeMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
