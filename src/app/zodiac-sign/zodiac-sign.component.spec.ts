import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZodiacSignComponent } from './zodiac-sign.component';

describe('ZodiacSignComponent', () => {
  let component: ZodiacSignComponent;
  let fixture: ComponentFixture<ZodiacSignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZodiacSignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZodiacSignComponent);
    component = fixture.componentInstance;
  });

  it('should create component ZodiacSignComponent', () => {
    expect(component).toBeTruthy();
  });

  it(`date 02-09-1989 should return zodiac sign 'Virgem'`, () => {
    const birthdate = new Date(new Date().getFullYear(), 8, 2);
    component.getZodiacSign(birthdate).then(zodiacSign => {
      expect(zodiacSign).toMatch(/Virgem/);
    });
  });
});
