import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HmWrapperComponent } from './hm-wrapper.component';

describe('HmWrapperComponent', () => {
  let component: HmWrapperComponent;
  let fixture: ComponentFixture<HmWrapperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HmWrapperComponent]
    });
    fixture = TestBed.createComponent(HmWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
