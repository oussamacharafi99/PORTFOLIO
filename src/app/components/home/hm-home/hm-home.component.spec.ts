import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HmHomeComponent } from './hm-home.component';

describe('HmHomeComponent', () => {
  let component: HmHomeComponent;
  let fixture: ComponentFixture<HmHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HmHomeComponent]
    });
    fixture = TestBed.createComponent(HmHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
