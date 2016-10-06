import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { HTTPTestComponent } from './http-test.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule ],
  providers:    [ HTTPTestService ],
  declarations: [ AppComponent, HTTPTestComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

