import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HmHeaderComponent } from './hm-header.component';

describe('HmHeaderComponent', () => {
  let component: HmHeaderComponent;
  let fixture: ComponentFixture<HmHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HmHeaderComponent]
    });
    fixture = TestBed.createComponent(HmHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
