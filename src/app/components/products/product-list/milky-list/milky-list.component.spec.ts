import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MilkyListComponent } from './milky-list.component';

describe('MilkyListComponent', () => {
  let component: MilkyListComponent;
  let fixture: ComponentFixture<MilkyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MilkyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MilkyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
