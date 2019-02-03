import { Component, OnInit } from '@angular/core';
import { Http, Response } from  '@angular/http';
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
  predictionsOne = false;

  private generalMatchURL = 'https://global-bet.azurewebsites.net/api/matches/';

  private predictionsNotStarted = 'https://global-bet.azurewebsites.net/api/predictions?matchStatus=notStarted';

  user_predictions:any = {};

  /* MEGA SHIT CODE! NEVER CODE LIKE THIS!!! */
  username:string = 'Odmen';
  password:string = 'Pituh';

  constructor( private http: Http ) {
    this.checkLogged();
    this.getPredictions();
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

  getPredictions() {
    return this.http.get(this.predictionsNotStarted)
      .map((res: Response) => res.json())
      .subscribe(data => {
        this.user_predictions = data;
        console.log(this.user_predictions);
      })
  }

  addMatch() {
    this.addNewMatch = !this.addNewMatch;
  }

  closeAddMatch() {
    this.addNewMatch = !this.addNewMatch;
  }

  showPredictions() {
    this.predictionsOne = !this.predictionsOne;
  }

  closePredictions() {
    this.predictionsOne = !this.predictionsOne;
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
