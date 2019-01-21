import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from  '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MatchesComponent } from './matches/matches.component';
import { SingleMatchComponent } from './single-match/single-match.component';


@NgModule({
  declarations: [
    AppComponent,
    MatchesComponent,
    SingleMatchComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
