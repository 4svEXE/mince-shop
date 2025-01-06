import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MeComponent } from './me/me.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'me', component: MeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
