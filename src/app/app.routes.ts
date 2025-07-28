import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

export const routes: Routes = [
   {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent , title: 'Home'
  },
  {
    path: 'details/:id', component: DetailsComponent , title: 'Details'
  },
  {
    path: '**', component:NotfoundComponent, pathMatch: 'full'
  }
];
