import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationformComponent } from './applicationform.component';

describe('ApplicationformComponent', () => {
  let component: ApplicationformComponent;
  let fixture: ComponentFixture<ApplicationformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplicationformComponent]
    });
    fixture = TestBed.createComponent(ApplicationformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
