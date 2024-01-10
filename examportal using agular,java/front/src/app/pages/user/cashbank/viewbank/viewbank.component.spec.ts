import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbankComponent } from './viewbank.component';

describe('ViewbankComponent', () => {
  let component: ViewbankComponent;
  let fixture: ComponentFixture<ViewbankComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewbankComponent]
    });
    fixture = TestBed.createComponent(ViewbankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
