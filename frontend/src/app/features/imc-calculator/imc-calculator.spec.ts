import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImcCalculator } from './imc-calculator';

describe('ImcCalculator', () => {
  let component: ImcCalculator;
  let fixture: ComponentFixture<ImcCalculator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImcCalculator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImcCalculator);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
