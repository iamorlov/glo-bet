import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  logged = false;
  error = false;

  /* MEGA SHIT CODE! NEVER CODE LIKE THIS!!! */
  username:string = 'Odmen';
  password:string = 'Pituh';

  constructor() {
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

  ngOnInit() { };

};
