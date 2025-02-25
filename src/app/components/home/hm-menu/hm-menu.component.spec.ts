import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HmMenuComponent } from './hm-menu.component';

describe('HmMenuComponent', () => {
  let component: HmMenuComponent;
  let fixture: ComponentFixture<HmMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HmMenuComponent]
    });
    fixture = TestBed.createComponent(HmMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
