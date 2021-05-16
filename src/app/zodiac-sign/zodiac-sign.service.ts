import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ZodiacSignService {
  private ariesInitialDate: Date;
  private ariesEndDate: Date;
  private taurusInitialDate: Date;
  private taurusEndDate: Date;
  private geminiInitialDate: Date;
  private geminiEndDate: Date;
  private cancerInitialDate: Date;
  private cancerEndDate: Date;
  private leoInitialDate: Date;
  private leoEndDate: Date;
  private virgoInitialDate: Date;
  private virgoEndDate: Date;
  private libraInitialDate: Date;
  private libraEndDate: Date;
  private scorpiusInitialDate: Date;
  private scorpiusEndDate: Date;
  private sagittariusInitialDate: Date;
  private sagittariusEndDate: Date;
  private capricornusInitialDate: Date;
  private capricornusEndDate: Date;
  private aquariusInitialDate: Date;
  private aquariusEndDate: Date;
  private piscesInitialDate: Date;
  private piscesEndDate: Date;

  constructor() { }

  /**
   * Gets the zodiac sign of the date passed as parameter.
   * @param selectedDate 
   * @returns 
   */
  public async getZodiacSign(selectedDate: Date, currentLanguage: string): Promise<string> {
    const dayAndMonthSelectedDate = new Date();
    dayAndMonthSelectedDate.setDate(selectedDate.getDate());
    dayAndMonthSelectedDate.setMonth(selectedDate.getMonth());

    await this.setZodiacSignsDates();

    if (dayAndMonthSelectedDate >= this.ariesInitialDate && dayAndMonthSelectedDate <= this.ariesEndDate) {
      return currentLanguage === 'pt' ? 'Áries' : 'Aries';
    } else if (dayAndMonthSelectedDate >= this.taurusInitialDate && dayAndMonthSelectedDate <= this.taurusEndDate) {
      return currentLanguage === 'pt' ? 'Touro' : 'Taurus';
    } else if (dayAndMonthSelectedDate >= this.geminiInitialDate && dayAndMonthSelectedDate <= this.geminiEndDate) {
      return currentLanguage === 'pt' ? 'Gêmeos' : 'Gemini';
    } else if (dayAndMonthSelectedDate >= this.cancerInitialDate && dayAndMonthSelectedDate <= this.cancerEndDate) {
      return currentLanguage === 'pt' ? 'Câncer' : 'Cancer';
    } else if (dayAndMonthSelectedDate >= this.leoInitialDate && dayAndMonthSelectedDate <= this.leoEndDate) {
      return currentLanguage === 'pt' ? 'Leão' : 'Leo';
    } else if (dayAndMonthSelectedDate >= this.virgoInitialDate && dayAndMonthSelectedDate <= this.virgoEndDate) {
      return currentLanguage === 'pt' ? 'Virgem' : 'Virgo';
    } else if (dayAndMonthSelectedDate >= this.libraInitialDate && dayAndMonthSelectedDate <= this.libraEndDate) {
      return 'Libra';
    } else if (dayAndMonthSelectedDate >= this.scorpiusInitialDate && dayAndMonthSelectedDate <= this.scorpiusEndDate) {
      return currentLanguage === 'pt' ? 'Escorpião' : 'Scorpius';
    } else if (dayAndMonthSelectedDate >= this.sagittariusInitialDate && dayAndMonthSelectedDate <= this.sagittariusEndDate) {
      return currentLanguage === 'pt' ? 'Sagitário' : 'Saggitarius';
    } else if (dayAndMonthSelectedDate >= this.capricornusInitialDate && dayAndMonthSelectedDate <= this.capricornusEndDate) {
      return currentLanguage === 'pt' ? 'Capricórnio' : 'Capricornus';
    } else if (dayAndMonthSelectedDate >= this.aquariusInitialDate && dayAndMonthSelectedDate <= this.aquariusEndDate) {
      return currentLanguage === 'pt' ? 'Aquário' : 'Aquarius';
    } else if (dayAndMonthSelectedDate >= this.piscesInitialDate && dayAndMonthSelectedDate <= this.piscesEndDate) {
      return currentLanguage === 'pt' ? 'Peixes' : 'Pisces';
    }
  }

  /**
   * Sets all zodiac sign's initial and end dates.
   */
  private async setZodiacSignsDates(): Promise<void> {
    this.ariesInitialDate = new Date();
    this.ariesEndDate = new Date();
    this.ariesInitialDate.setMonth(2, 21);
    this.ariesEndDate.setMonth(3, 19);

    this.taurusInitialDate = new Date();
    this.taurusEndDate = new Date();
    this.taurusInitialDate.setMonth(3, 20);
    this.taurusEndDate.setMonth(4, 20);

    this.geminiInitialDate = new Date();
    this.geminiEndDate = new Date();
    this.geminiInitialDate.setMonth(4, 21);
    this.geminiEndDate.setMonth(5, 21);

    this.cancerInitialDate = new Date();
    this.cancerEndDate = new Date();
    this.cancerInitialDate.setMonth(5, 22);
    this.cancerEndDate.setMonth(6, 22);

    this.leoInitialDate = new Date();
    this.leoEndDate = new Date();
    this.leoInitialDate.setMonth(6, 23);
    this.leoEndDate.setMonth(7, 22);

    this.virgoInitialDate = new Date();
    this.virgoEndDate = new Date();
    this.virgoInitialDate.setMonth(7, 23);
    this.virgoEndDate.setMonth(8, 22);

    this.libraInitialDate = new Date();
    this.libraEndDate = new Date();
    this.libraInitialDate.setMonth(8, 23);
    this.libraEndDate.setMonth(9, 23);

    this.scorpiusInitialDate = new Date();
    this.scorpiusEndDate = new Date();
    this.scorpiusInitialDate.setMonth(9, 24);
    this.scorpiusEndDate.setMonth(10, 21);

    this.sagittariusInitialDate = new Date();
    this.sagittariusEndDate = new Date();
    this.sagittariusInitialDate.setMonth(10, 22);
    this.sagittariusEndDate.setMonth(11, 21);

    this.capricornusInitialDate = new Date();
    this.capricornusEndDate = new Date();
    this.capricornusInitialDate.setMonth(11, 22);
    this.capricornusEndDate.setMonth(0, 19);

    this.aquariusInitialDate = new Date();
    this.aquariusEndDate = new Date();
    this.aquariusInitialDate.setMonth(0, 20);
    this.aquariusEndDate.setMonth(1, 18);

    this.piscesInitialDate = new Date();
    this.piscesEndDate = new Date();
    this.piscesInitialDate.setMonth(1, 20);
    this.piscesEndDate.setMonth(2, 20);
  }
}
