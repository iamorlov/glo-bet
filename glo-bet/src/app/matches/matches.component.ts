import { Component, OnInit } from '@angular/core';
import { Http, Response } from  '@angular/http';
import { ScrollToService } from 'ng2-scroll-to-el';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent implements OnInit {

  private getMatchesURL = 'https://global-bet.azurewebsites.net/api/matches?offset=0&limit=100';
  data: any = [];

  private generalMatchURL = 'https://global-bet.azurewebsites.net/api/matches/';
  matchId: any;
  single_data: any = {};
  single_data_array = [];

  edit_matches = [];

  constructor( private http: Http, private scrollService: ScrollToService) {
      this.getMatchesData();
      this.getMatches();
  }

  scrollToMe(element) {
    this.scrollService.scrollTo(element);
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
      this.getSingleMatchData();
      this.getSingleMatch();
    }
  }

  scrollEdit(el: HTMLElement) {
    el.scrollIntoView();
  };

  getSingleMatch() {
    let getSingleMatchDataURL = this.generalMatchURL + this.matchId;
    return this.http.get(getSingleMatchDataURL)
      .map((res: Response) => res.json());
  }

  getSingleMatchData() {
    this.getSingleMatch().subscribe(data => {
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

    let putSingleMatchDataURL = this.generalMatchURL + value.id;
    setTimeout(() => {
      document.getElementById(value.id).remove();
    }, 500);
    return this.http
      .put(putSingleMatchDataURL, updatedMatch)
      .subscribe((res: Response) => res);
  }

  ngOnInit() {
  }

}
