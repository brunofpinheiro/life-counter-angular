import { Component } from '@angular/core';
import { ZodiacSignService } from './zodiac-sign/zodiac-sign.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public currentLanguage: string;
  public dateOfBirthText: string;
  public calculateText: string;
  public ageText: string;
  public yearsText: string;
  public monthsText: string;
  public daysText: string;
  public andText: string;
  public zodiacSignText: string;
  public returnText: string;

  public selectedDateString: string;
  public selectedDate = new Date();
  private currentDate = new Date();
  public yearsLived = 0;
  public monthsLived = 0;
  public daysLived = 0;

  public zodiacSign: string;
  public showInvalidDateAlert = false;

  constructor(private zodiacSignService: ZodiacSignService) { }

  ngOnInit() {
    this.changeLanguage();
  }

  // tslint:disable:max-line-length
  public async calculateLifetime(): Promise<void> {
    if (this.selectedDateString !== undefined && this.selectedDateString.length !== 8) {
      this.showInvalidDateAlert = true;
    } else {
      if (this.selectedDateString !== undefined) {
        this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), this.currentDate.getDate());
        // const year  = parseInt(this.selectedDateString.substr(0, this.selectedDateString.indexOf('-')), 10);
        // const month = parseInt(this.selectedDateString.substr(this.selectedDateString.indexOf('-') + 1, this.selectedDateString.indexOf('-')), 10);
        // const day   = parseInt(this.selectedDateString.substr(this.selectedDateString.lastIndexOf('-') + 1, this.selectedDateString.length), 10);
        const day = parseInt(this.selectedDateString.substr(0, 2), 10);
        const month = parseInt(this.selectedDateString.substr(2, 2), 10);
        const year = parseInt(this.selectedDateString.substr(4, this.selectedDateString.length), 10);

        this.selectedDate = new Date(year, month - 1, day);
        console.log(`selectedDate: ${this.selectedDate}`);

        this.yearsLived = await this.calculateYears();
        this.monthsLived = await this.calculateMonths();
        this.daysLived = await this.calculateDays();
      }
    }
  }

  private async calculateYears(): Promise<number> {
    let tempYears;

    if (this.selectedDate.getFullYear() > this.currentDate.getFullYear()) {
      console.log('ano superior ao atual');
    } else {

      tempYears = this.currentDate.getFullYear() - this.selectedDate.getFullYear();
      if (this.currentDate.getMonth() < this.selectedDate.getMonth()
        || (this.currentDate.getMonth() === this.selectedDate.getMonth() && this.currentDate.getDate() < this.selectedDate.getDate())) {
        tempYears--;
      }

      if (this.currentLanguage === 'pt') {
        this.yearsText = tempYears === 1 ? 'ano' : 'anos';
      } else {
        this.yearsText = tempYears === 1 ? 'year' : 'years';
      }

      console.log(`tempYears`, tempYears);
      return tempYears;
    }
  }

  private async calculateMonths(): Promise<number> {
    let tempMonths = 0;

    if (this.currentDate.getMonth() < this.selectedDate.getMonth()) {
      tempMonths = (this.currentDate.getMonth() + 1) + (12 - (this.selectedDate.getMonth() + 1));
    } else if (this.currentDate.getMonth() > this.selectedDate.getMonth()) {
      tempMonths = this.currentDate.getMonth() - this.selectedDate.getMonth();
    } else if (this.currentDate.getMonth() === this.selectedDate.getMonth() && this.currentDate.getDate() < this.selectedDate.getDate()) {
      tempMonths = 11;
    } else if (this.currentDate.getDate() < this.selectedDate.getDate()) {
      tempMonths--;
    } else {
      tempMonths = 0;
    }

    if (this.currentLanguage === 'pt') {
      this.monthsText = tempMonths === 1 ? 'mês' : 'meses';
    } else {
      this.monthsText = tempMonths === 1 ? 'month' : 'months';
    }

    console.log(`tempMonths`, tempMonths);
    return tempMonths;
  }

  private async calculateDays(): Promise<number> {
    let tempDays = 0;

    if (this.currentDate.getDate() > this.selectedDate.getDate()) {
      tempDays = this.currentDate.getDate() - this.selectedDate.getDate();
    } else {
      tempDays = await this.getRemainingDays(this.selectedDate) + this.currentDate.getDate();
    }

    if (this.currentLanguage === 'pt') {
      this.daysText = tempDays === 1 ? 'dia' : 'dias';
    } else {
      this.daysText = tempDays === 1 ? 'day' : 'days';
    }

    console.log(`tempDays`, tempDays);
    return tempDays;
  }

  /**
   * Get the days left until the end of month
   * @param dateInTest
   * @private
   */
  private async getRemainingDays(dateInTest: Date): Promise<number> {
    let date;
    let time;
    let days;

    date = new Date(dateInTest.getFullYear(), dateInTest.getMonth(), dateInTest.getDate());
    time = new Date(date.getTime());
    time.setMonth(date.getMonth() + 1);
    time.setDate(0);
    days = time.getDate() > date.getDate() ? time.getDate() - date.getDate() : 0;

    return days;
  }

  /**
   * Resets all variables
   */
  public return(): void {
    this.yearsLived = 0;
    this.monthsLived = 0;
    this.daysLived = 0;

    this.selectedDate = new Date();
    this.selectedDateString = undefined;
  }

  /**
   * Get the zodiac sign for the selected date.
   */
  public async getZodiacSign(): Promise<void> {
    this.zodiacSign = await this.zodiacSignService.getZodiacSign(this.selectedDate, this.currentLanguage);
  }

  /**
   * Changes language between portuguese and english.
   */
  public changeLanguage() {
    this.currentLanguage = this.currentLanguage === 'en' || this.currentLanguage === undefined ? 'pt' : 'en';

    if (this.currentLanguage === 'pt') {
      this.dateOfBirthText = 'Data de nascimento';
      this.calculateText = 'Calcular';
      this.ageText = 'Idade';
      // this.yearsText = 'anos';
      // this.daysText = 'dias';
      this.andText = 'e';
      this.zodiacSignText = 'Signo';
      this.returnText = 'Voltar';
    } else {
      this.dateOfBirthText = 'Date of birth';
      this.calculateText = 'Calculate';
      this.ageText = 'Age';
      // this.yearsText = 'years';
      // this.daysText = 'days';
      this.andText = 'and';
      this.zodiacSignText = 'Zodiac sign';
      this.returnText = 'Return';
    }

    this.getZodiacSign();
  }
}
