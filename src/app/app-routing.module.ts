import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlueLinesComponent } from './lines/blue-lines/blue-lines.component';
import { GreenLinesComponent } from './lines/green-lines/green-lines.component';
import { RedLinesComponent } from './lines/red-lines/red-lines.component';
import { YellowLinesComponent } from './lines/yellow-lines/yellow-lines.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'blueLine', component: BlueLinesComponent },
  { path: 'greenLine', component: GreenLinesComponent },
  { path: 'redLine', component: RedLinesComponent},
  { path:'yellowLine', component: YellowLinesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
