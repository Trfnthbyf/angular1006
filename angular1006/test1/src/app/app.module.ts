import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HTTPTestComponent } from './http-test.component';
import { HTTPTestService } from './http-test.service';


@NgModule({
  declarations: [
    AppComponent,
    HTTPTestComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],  
  providers: [ HTTPTestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
