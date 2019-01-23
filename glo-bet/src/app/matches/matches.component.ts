import { Component, OnInit } from '@angular/core';
import { Http, Response } from  '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent implements OnInit {

  private getMatchesURL = 'https://global-bet.azurewebsites.net/api/matches?offset=0&limit=100';
  data: any = {};

  private generalMatchURL = 'https://global-bet.azurewebsites.net/api/matches/';
  matchId: any;
  single_data: any = {};
  single_data_array = [];

  edit_matches = [];

  constructor( private http: Http ) {
    this.getMatchesData();
    this.getMatches();
  }

  getMatches() {
    return this.http.get(this.getMatchesURL)
    .map((res: Response) => res.json());
  }

  getMatchesData() {
    this.getMatches().subscribe(data => {
      this.data = data;
    })
  }

  singleMatchOpen(id) {
    this.matchId = id;
    if (this.edit_matches.includes(this.matchId) === true) {
      return false;
    } else {
      this.edit_matches.push(id);
      console.log(this.edit_matches);
      this.getSingleMatchData();
      this.getSingleMatch();
    }
  }

  getSingleMatch() {
    let getSingleMatchDataURL = this.generalMatchURL + this.matchId;
    return this.http.get(getSingleMatchDataURL)
      .map((res: Response) => res.json());
  }

  getSingleMatchData() {
    this.getSingleMatch().subscribe(data => {
      console.log(data);
      this.single_data = data;
      this.single_data_array.push(data);
    })
  }

  onSubmit(value: any) {
    let updatedMatch = {
      '_id': value.id,
      'homeTeam': value.homeTeam,
      'homeGoals': value.homeGoals,
      'awayTeam': value.awayTeam,
      'awayGoals': value.awayGoals,
      'matchStatus': value.matchStatus,
      'winner': value.winner,
      'date': value.date
    };

    console.log(updatedMatch);

    let putSingleMatchDataURL = this.generalMatchURL + value.id;
    return this.http
      .put(putSingleMatchDataURL, updatedMatch)
      .subscribe((res: Response) => res.json());
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
      'date': value.date
    };

    console.log(addMatch);
    return this.http
      .post(this.generalMatchURL, addMatch)
      .subscribe((res: Response) => res.json());
  }

  ngOnInit() {
  }

}
