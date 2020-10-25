import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { CountriesComponent } from './countries/countries.component';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { InputPageComponent } from './input-page/input-page.component';

const routes: Routes = [
  {path:  '', pathMatch:  'full', redirectTo:  'home'},
  {
    path: 'countries',
    component: CountriesComponent
  },
  {
    path: 'countries-details',
    component: CountryDetailsComponent
  },
  {
    path: 'input-page',
    component: InputPageComponent
  },
  {
    path: 'home',
    component: WelcomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
