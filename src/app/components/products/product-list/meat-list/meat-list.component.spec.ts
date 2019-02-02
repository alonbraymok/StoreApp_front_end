import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeatListComponent } from './meat-list.component';

describe('MeatListComponent', () => {
  let component: MeatListComponent;
  let fixture: ComponentFixture<MeatListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeatListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeatListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
