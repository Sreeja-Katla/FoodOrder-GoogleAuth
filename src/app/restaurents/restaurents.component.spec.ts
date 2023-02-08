import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurentsComponent } from './restaurents.component';

describe('RestaurentsComponent', () => {
  let component: RestaurentsComponent;
  let fixture: ComponentFixture<RestaurentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
