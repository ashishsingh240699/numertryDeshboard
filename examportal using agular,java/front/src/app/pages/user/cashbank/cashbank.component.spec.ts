import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashbankComponent } from './cashbank.component';

describe('CashbankComponent', () => {
  let component: CashbankComponent;
  let fixture: ComponentFixture<CashbankComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CashbankComponent]
    });
    fixture = TestBed.createComponent(CashbankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
