import { Component, OnInit } from '@angular/core';
import { Http, Response } from  '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  logged = false;
  error = false;
  addNewMatch = false;

  private generalMatchURL = 'https://global-bet.azurewebsites.net/api/matches/';

  /* MEGA SHIT CODE! NEVER CODE LIKE THIS!!! */
  username:string = 'Odmen';
  password:string = 'Pituh';

  constructor( private http: Http ) {
    this.checkLogged();
  }

  login() {
    this.logged = !this.logged;
  }

  onLogin(value: any) {
    if(value.username === this.username && value.password === this.password) {
      this.logged = !this.logged;
      localStorage.setItem('logged', 'true');
    } else {
      this.error = !this.error;
    }
  };

  checkLogged() {
    if (localStorage.getItem('logged') === 'true') {
      this.logged = !this.logged;
    }
  }

  logOut() {
    localStorage.clear();
    document.location.reload(true);
  }

  addMatch() {
    this.addNewMatch = !this.addNewMatch;
  }

  closeAddMatch() {
    this.addNewMatch = !this.addNewMatch;
  }

  postSubmit(value: any) {

    let addMatch = {
      '_id': (function () {
                  var timestamp = (new Date().getTime() / 1000 | 0).toString(16);
                  return timestamp + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, function() {
                      return (Math.random() * 16 | 0).toString(16);
                  }).toLowerCase();
              })(),
      'homeTeam': value.homeTeam,
      'homeGoals': null,
      'awayTeam': value.awayTeam,
      'awayGoals': null,
      'matchStatus': 'NotStarted',
      'winner': null,
      'date': value.date + 'T' + value.time + ':00+02:00'
    };

    setTimeout(() => {
      location.reload();
    }, 1000);

    return this.http
      .post(this.generalMatchURL, addMatch)
      .subscribe((res: Response) => res);
  }

  ngOnInit() { };

};
