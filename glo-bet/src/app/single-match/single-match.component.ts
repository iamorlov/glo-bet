import { Component, OnInit } from '@angular/core';
import { Http, Response } from  '@angular/http';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-single-match',
  templateUrl: './single-match.component.html',
  styleUrls: ['./single-match.component.scss']
})
export class SingleMatchComponent implements OnInit {

    private getSingleMatchURL = 'https://global-bet.azurewebsites.net/api/matches/';
    matchId = '5c3f25b875001093ac5a25cc';
    getSingleMatchDataURL = this.getSingleMatchURL + this.matchId;
    single_data_array = []; // FUCKING FIX!
    single_data: any = {};

    constructor( private http: Http ) {
      this.getSingleMatchData();
      this.getSingleMatch();
    }

    getSingleMatch() {
      return this.http.get('https://global-bet.azurewebsites.net/api/matches/5c3f25b875001093ac5a25cc')
      .map((res: Response) => res.json());
    }

    getSingleMatchData() {
      this.getSingleMatch().subscribe(data => {
        console.log(data);
        this.single_data = data;
        this.single_data_array.push(data);
      })
    }

  ngOnInit() { }

}
