import { Component, OnInit } from '@angular/core';
import { Http, Response } from  '@angular/http';
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
  matchId = false;
  single_data_array = []; // FUCKING FIX!
  single_data: any = {};

  constructor( private http: Http ) {
    this.getMatchesData();
    this.getMatches();

    this.getSingleMatchData();
    this.getSingleMatch();
  }

  getMatches() {
    return this.http.get(this.getMatchesURL)
    .map((res: Response) => res.json());
  }

  getMatchesData() {
    this.getMatches().subscribe(data => {
      console.log(data);
      this.data = data;
    })
  }

  singleMatchOpen(id) {
    this.matchId = id;
    console.log(this.matchId);
    this.getSingleMatchData();
    this.getSingleMatch();
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

  ngOnInit() {
  }

}
