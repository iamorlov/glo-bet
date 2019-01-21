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
      console.log(data);
      this.data = data;
    })
  }

  ngOnInit() {
  }

}
