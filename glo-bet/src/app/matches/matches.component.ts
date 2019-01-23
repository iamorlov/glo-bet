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

  private getSingleMatchURL = 'https://global-bet.azurewebsites.net/api/matches/';
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
    let getSingleMatchDataURL = this.getSingleMatchURL + this.matchId;
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

    let putSingleMatchDataURL = this.getSingleMatchURL + value.id;
    return this.http
      .put(putSingleMatchDataURL, updatedMatch)
      .subscribe();
  }

  ngOnInit() {
  }

}
