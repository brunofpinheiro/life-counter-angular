import {ComponentFixture, TestBed} from '@angular/core/testing';
import { AppComponent } from './app.component';
import {ZodiacSignComponent} from './zodiac-sign/zodiac-sign.component';

describe('AppComponent', () => {
  let component: ZodiacSignComponent;
  let fixture: ComponentFixture<ZodiacSignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZodiacSignComponent);
    component = fixture.componentInstance;
  });

  it('should create component AppComponent', () => {
    expect(component).toBeTruthy();
  });

  // it('should create the app', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app).toBeTruthy();
  // });

  // it(`should have as title 'lifecounter-angular'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('lifecounter-angular');
  // });
  //
  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement;
  //   expect(compiled.querySelector('.content span').textContent).toContain('lifecounter-angular app is running!');
  // });
});
