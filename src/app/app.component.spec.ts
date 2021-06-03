import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ZodiacSignService } from './zodiac-sign/zodiac-sign.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [AppComponent],
      providers: [ZodiacSignService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create component AppComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should reset all variables', () => {
    component.return();
    expect(component.yearsLived).toBe(0);
    expect(component.monthsLived).toBe(0);
    expect(component.daysLived).toBe(0);
    expect(component.selectedDate).toBeTruthy();
    expect(component.selectedDateString).toBe(undefined);
  });

  it('should change language to english', () => {
    component.currentLanguage = 'pt';
    component.changeLanguage();

    expect(component.dateOfBirthText).toBe('Date of birth');
    expect(component.calculateText).toBe('Calculate');
    expect(component.ageText).toBe('Age');
    expect(component.andText).toBe('and');
    expect(component.zodiacSignText).toBe('Zodiac sign');
    expect(component.returnText).toBe('Return');
    expect(component.invalidDateText).toContain('Invalid date');
    expect(component.tryAgainText).toContain('Try again');
  });

  it('should change language to portuguese', () => {
    component.currentLanguage = 'en';
    component.changeLanguage();

    expect(component.dateOfBirthText).toBe('Data de nascimento');
    expect(component.calculateText).toBe('Calcular');
    expect(component.ageText).toBe('Idade');
    expect(component.andText).toBe('e');
    expect(component.zodiacSignText).toBe('Signo');
    expect(component.returnText).toBe('Voltar');
    expect(component.invalidDateText).toContain('Data inválida');
    expect(component.tryAgainText).toContain('Tente novamente');
  });
});
