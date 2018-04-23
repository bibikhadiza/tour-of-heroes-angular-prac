import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {  HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: HeroDetailComponent},
  {path: 'heroes', component: HeroesComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }


/* An angular best practice is to load and configure the router in a seperate tip level
module that is dedicated to routing and importing by the root AppModule. By conventuon the module
class name is AppRoutingModule and the class belong to the app-routing-module.ts file.
Setting the export property in out class recorator will enable the componenets in appmodule have accress
to the routes.

The method forRoot() configures the router at the applications root level. The forRoot()
method supplied the service providers and directives needed for routing, and perform the initial
nagivation based on the current browser URL.


*/
