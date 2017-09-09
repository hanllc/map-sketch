import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TestiterationsService } from './testiterations.service';
import { AmapComponent } from './amap/amap.component';

@NgModule({
  declarations: [
    AppComponent,
    AmapComponent
  ],
  imports: [
    BrowserModule, 
    HttpModule
  ],
  providers: [TestiterationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
