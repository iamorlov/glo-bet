import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  welcomePage = true;
  addMatch = false;
  matchResult = false;
  matchesHistory = false;

  addMatchFunction() {
    this.welcomePage = false;
    this.addMatch = !this.addMatch;
  };

  addResultFunction() {
    this.welcomePage = false;
    this.matchResult = !this.matchResult;
  };

  matchesHistoryFunction() {
    this.welcomePage = false;
    this.matchesHistory = !this.matchesHistory;
  };

  backFunction() {
    this.welcomePage = true;
    this.addMatch = false;
    this.matchResult = false;
    this.matchesHistory = false;
  }

  ngOnInit() { };

};
