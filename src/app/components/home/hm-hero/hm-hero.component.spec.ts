import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HmHeroComponent } from './hm-hero.component';

describe('HmHeroComponent', () => {
  let component: HmHeroComponent;
  let fixture: ComponentFixture<HmHeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HmHeroComponent]
    });
    fixture = TestBed.createComponent(HmHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
