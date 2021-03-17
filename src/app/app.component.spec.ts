import {ComponentFixture, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {ZodiacSignComponent} from './zodiac-sign/zodiac-sign.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [AppComponent],
      providers: [ZodiacSignComponent]
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
    expect(component.selectedDateString).toBe('');
  });
});
