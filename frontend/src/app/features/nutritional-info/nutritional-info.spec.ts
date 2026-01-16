import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionalInfo } from './nutritional-info';

describe('NutritionalInfo', () => {
  let component: NutritionalInfo;
  let fixture: ComponentFixture<NutritionalInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NutritionalInfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NutritionalInfo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
