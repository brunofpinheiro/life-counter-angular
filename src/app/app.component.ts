import {ChangeDetectorRef, Component} from '@angular/core';
import {ZodiacSignComponent} from './zodiac-sign/zodiac-sign.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // private ariesInitialDate = new Date();
  // private ariesEndDate = new Date();
  // private taurusInitialDate = new Date();
  // private taurusEndDate = new Date();
  // private geminiInitialDate = new Date();
  // private geminiEndDate = new Date();
  // private cancerInitialDate = new Date();
  // private cancerEndDate = new Date();
  // private leoInitialDate = new Date();
  // private leoEndDate = new Date();
  // private virgoInitialDate = new Date();
  // private virgoEndDate = new Date();
  // private libraInitialDate = new Date();
  // private libraEndDate = new Date();
  // private scorpiusInitialDate = new Date();
  // private scorpiusEndDate = new Date();
  // private sagittariusInitialDate = new Date();
  // private sagittariusEndDate = new Date();
  // private capricornusInitialDate = new Date();
  // private capricornusEndDate = new Date();
  // private aquariusInitialDate = new Date();
  // private aquariusEndDate = new Date();
  // private piscesInitialDate = new Date();
  // private piscesEndDate = new Date();

  public selectedDateString: string;
  public selectedDate = new Date();
  private currentDate = new Date();
  public yearsLived = 0;
  public monthsLived = 0;
  public daysLived = 0;
  public monthsText: string;
  public zodiacSign: string;

  constructor(private zodiacSignComponent: ZodiacSignComponent,
              private changeDetectorRef: ChangeDetectorRef) {

  }

  // tslint:disable:max-line-length
  public async calculateLifetime(): Promise<void> {
    if (this.selectedDateString !== undefined) {
      this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), this.currentDate.getDate());
      const year = parseInt(this.selectedDateString.substr(0, this.selectedDateString.indexOf('-')), 10);
      const month = parseInt(this.selectedDateString.substr(this.selectedDateString.indexOf('-') + 1, this.selectedDateString.indexOf('-')), 10);
      const day = parseInt(this.selectedDateString.substr(this.selectedDateString.lastIndexOf('-') + 1, this.selectedDateString.length), 10);

      this.selectedDate = new Date(year, month - 1, day);
      console.log(`selectedDate: ${this.selectedDate}`);

      this.yearsLived  = await this.calculateYears();
      this.monthsLived = await this.calculateMonths();
      this.daysLived   = await this.calculateDays();

      // console.log(`data atual: ${this.currentDate}`);
      // console.log(`birthdate: ${this.selectedDateString}`);
    }
  }

  private async calculateYears(): Promise<number> {
    let tempYears;

    if (this.selectedDate.getFullYear() > this.currentDate.getFullYear()) {
      console.log('ano superior ao atual');
    } else {

      tempYears = this.currentDate.getFullYear() - this.selectedDate.getFullYear();
      if (this.currentDate.getMonth() < this.selectedDate.getMonth()) {
        tempYears--;
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
    } else {
      tempMonths = 0;
    }

    if (this.currentDate.getDate() < this.selectedDate.getDate()) {
      tempMonths--;
    }

    if (tempMonths === 1) {
      this.monthsText = 'mês';
    } else {
      this.monthsText = 'meses';
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

  public return(): void {
    this.yearsLived  = 0;
    this.monthsLived = 0;
    this.daysLived   = 0;

    this.selectedDate = new Date();
    this.selectedDateString = '';
  }

  /**
   * Get the zodiac sign for the selected date.
   */
  public async getZodiacSign(): Promise<void> {
    this.zodiacSign = await this.zodiacSignComponent.getZodiacSign(this.selectedDate);
  }
}
