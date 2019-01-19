import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.scss']
})
export class AddMatchComponent implements OnInit {

  myform: FormGroup;
  homeTeam: FormControl;
  homeGoals: FormControl;
  awayTeam: FormControl;
  awayGoals: FormControl;
  matchStatus: FormControl;
  winner: FormControl;
  date: FormControl;

  constructor() { }

  ngOnInit() {

  }

  createForm() {
    this.myform = new FormGroup({
      homeTeam: this.homeTeam,
      homeGoals: this.homeGoals,
      awayTeam: this.awayTeam,
      awayGoals: this.awayGoals,
      matchStatus: this.matchStatus,
      winner: this.winner,
      date: this.date
    });
  }

  onSubmit() {
      this.createForm();
      localStorage.setItem('match', 'done!');
      this.myform.reset();
  }

}
