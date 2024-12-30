import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerListsComponent } from './customer-lists.component';

describe('CustomerListsComponent', () => {
  let component: CustomerListsComponent;
  let fixture: ComponentFixture<CustomerListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerListsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomerListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
