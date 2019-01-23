import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from  '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { MatchesComponent } from './matches/matches.component';


@NgModule({
  declarations: [
    AppComponent,
    MatchesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
