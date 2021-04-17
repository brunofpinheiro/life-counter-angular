import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ZodiacSignComponent} from './zodiac-sign/zodiac-sign.component';
import {NgxMaskModule} from 'ngx-mask';

@NgModule({
  declarations: [
    AppComponent,
    ZodiacSignComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [ZodiacSignComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
