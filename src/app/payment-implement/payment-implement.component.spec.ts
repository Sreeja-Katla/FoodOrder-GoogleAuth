import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentImplementComponent } from './payment-implement.component';

describe('PaymentImplementComponent', () => {
  let component: PaymentImplementComponent;
  let fixture: ComponentFixture<PaymentImplementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentImplementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentImplementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
