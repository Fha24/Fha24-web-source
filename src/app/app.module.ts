import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopberComponent } from './topber/topber.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    TopberComponent,
    CardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
