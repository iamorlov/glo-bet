import { Component, OnInit } from '@angular/core';
import { Http, Response } from  '@angular/http';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-single-match',
  templateUrl: './single-match.component.html',
  styleUrls: ['./single-match.component.css']
})
export class SingleMatchComponent implements OnInit {

    private getSingleMatchURL = 'https://global-bet.azurewebsites.net/api/matches/';
    matchId = '5c3f25b875001093ac5a25cc';
    data: any = {};

    constructor( private http: Http ) {
      this.getMatchesData();
      this.getMatches();
    }

    getMatches() {
      let getSingleMatch = this.getSingleMatchURL + this.matchId;
      return this.http.get(getSingleMatch)
      .map((res: Response) => res.json());
    }

    getMatchesData() {
      this.getMatches().subscribe(data => {
        console.log(data);
        this.data = data;
      })
    }

  ngOnInit() {
  }

}
