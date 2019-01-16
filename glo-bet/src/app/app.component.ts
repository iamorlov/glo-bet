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
    console.log('Switched!');
  };

  addResultFunction() {
    this.welcomePage = false;
    this.matchResult = !this.matchResult;
    console.log('Switched!');
  };

  matchesHistoryFunction() {
    this.welcomePage = false;
    this.matchesHistory = !this.matchesHistory;
    console.log('Switched!');
  };

  backFunction() {
    this.welcomePage = true;
    this.addMatch = false;
    this.matchResult = false;
    this.matchesHistory = false;
  }

  ngOnInit() { };

};
