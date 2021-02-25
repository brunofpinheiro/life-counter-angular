import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-zodiac-sign',
  templateUrl: './zodiac-sign.component.html',
  styleUrls: ['./zodiac-sign.component.scss']
})
export class ZodiacSignComponent implements OnInit {
  private ariesInitialDate = new Date();
  private ariesEndDate = new Date();
  private taurusInitialDate = new Date();
  private taurusEndDate = new Date();
  private geminiInitialDate = new Date();
  private geminiEndDate = new Date();
  private cancerInitialDate = new Date();
  private cancerEndDate = new Date();
  private leoInitialDate = new Date();
  private leoEndDate = new Date();
  private virgoInitialDate = new Date();
  private virgoEndDate = new Date();
  private libraInitialDate = new Date();
  private libraEndDate = new Date();
  private scorpiusInitialDate = new Date();
  private scorpiusEndDate = new Date();
  private sagittariusInitialDate = new Date();
  private sagittariusEndDate = new Date();
  private capricornusInitialDate = new Date();
  private capricornusEndDate = new Date();
  private aquariusInitialDate = new Date();
  private aquariusEndDate = new Date();
  private piscesInitialDate = new Date();
  private piscesEndDate = new Date();

  constructor() { }

  ngOnInit(): void {
  }

  public async getZodiacSign(selectedDate: Date): Promise<string> {
    await this.setZodiacSignsDates();

    const dayAndMonthSelectedDate = new Date();
    dayAndMonthSelectedDate.setDate(selectedDate.getDate());
    dayAndMonthSelectedDate.setMonth(selectedDate.getMonth());

    if (dayAndMonthSelectedDate >= this.ariesInitialDate && dayAndMonthSelectedDate <= this.ariesEndDate) {
      return 'Áries';
    } else if (dayAndMonthSelectedDate >= this.taurusInitialDate && dayAndMonthSelectedDate <= this.taurusEndDate) {
      return 'Touro';
    } else if (dayAndMonthSelectedDate >= this.geminiInitialDate && dayAndMonthSelectedDate <= this.geminiEndDate) {
      return 'Gêmeos';
    } else if (dayAndMonthSelectedDate >= this.cancerInitialDate && dayAndMonthSelectedDate <= this.cancerEndDate) {
      return 'Câncer';
    } else if (dayAndMonthSelectedDate >= this.leoInitialDate && dayAndMonthSelectedDate <= this.leoEndDate) {
      return 'Leão';
    } else if (dayAndMonthSelectedDate >= this.virgoInitialDate && dayAndMonthSelectedDate <= this.virgoEndDate) {
      return 'Virgem';
    } else if (dayAndMonthSelectedDate >= this.libraInitialDate && dayAndMonthSelectedDate <= this.libraEndDate) {
      return 'Libra';
    } else if (dayAndMonthSelectedDate >= this.scorpiusInitialDate && dayAndMonthSelectedDate <= this.scorpiusEndDate) {
      return 'Escorpião';
    } else if (dayAndMonthSelectedDate >= this.sagittariusInitialDate && dayAndMonthSelectedDate <= this.sagittariusEndDate) {
      return 'Sagitário';
    } else if (dayAndMonthSelectedDate >= this.capricornusInitialDate && dayAndMonthSelectedDate <= this.capricornusEndDate) {
      return 'Capricórnio';
    } else if (dayAndMonthSelectedDate >= this.aquariusInitialDate && dayAndMonthSelectedDate <= this.aquariusEndDate) {
      return 'Aquário';
    } else if (dayAndMonthSelectedDate >= this.piscesInitialDate && dayAndMonthSelectedDate <= this.piscesEndDate) {
      return 'Peixes';
    }
  }

  private async setZodiacSignsDates(): Promise<void> {
    this.ariesInitialDate.setMonth(2, 21);
    this.ariesEndDate.setMonth(3, 19);

    this.taurusInitialDate.setMonth(3, 20);
    this.taurusEndDate.setMonth(4, 20);

    this.geminiInitialDate.setMonth(4, 21);
    this.geminiEndDate.setMonth(5, 21);

    this.cancerInitialDate.setMonth(5, 22);
    this.cancerEndDate.setMonth(6, 22);

    this.leoInitialDate.setMonth(6, 23);
    this.leoEndDate.setMonth(7, 22);

    this.virgoInitialDate.setMonth(7, 23);
    this.virgoEndDate.setMonth(8, 22);

    this.libraInitialDate.setMonth(8, 23);
    this.libraEndDate.setMonth(9, 23);

    this.scorpiusInitialDate.setMonth(9, 24);
    this.scorpiusEndDate.setMonth(10, 21);

    this.sagittariusInitialDate.setMonth(10, 22);
    this.sagittariusEndDate.setMonth(11, 21);

    this.capricornusInitialDate.setMonth(11, 22);
    this.capricornusEndDate.setMonth(0, 19);

    this.aquariusInitialDate.setMonth(0, 20);
    this.aquariusEndDate.setMonth(1, 18);

    this.piscesInitialDate.setMonth(1, 20);
    this.piscesEndDate.setMonth(2, 20);
  }
}
