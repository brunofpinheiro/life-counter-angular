import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ZodiacSignComponent} from './zodiac-sign/zodiac-sign.component';

@NgModule({
  declarations: [
    AppComponent,
    ZodiacSignComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [ZodiacSignComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
