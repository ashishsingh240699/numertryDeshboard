import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortlistCollegeComponent } from './shortlist-college.component';

describe('ShortlistCollegeComponent', () => {
  let component: ShortlistCollegeComponent;
  let fixture: ComponentFixture<ShortlistCollegeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShortlistCollegeComponent]
    });
    fixture = TestBed.createComponent(ShortlistCollegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
