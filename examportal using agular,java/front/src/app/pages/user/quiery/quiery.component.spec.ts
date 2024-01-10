import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuieryComponent } from './quiery.component';

describe('QuieryComponent', () => {
  let component: QuieryComponent;
  let fixture: ComponentFixture<QuieryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuieryComponent]
    });
    fixture = TestBed.createComponent(QuieryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
