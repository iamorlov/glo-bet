import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SingleMatchComponent } from './single-match/single-match.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  }, {
    path: 'single_match',
    component: SingleMatchComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
