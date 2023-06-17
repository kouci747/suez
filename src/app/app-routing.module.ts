import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullstackInternDeveloperComponent } from './components/fullstack-intern-developer/fullstack-intern-developer.component';
import { PiloteComponent } from './components/pilote/pilote.component';
import { MovieComponent } from './components/movie/movie.component';
import { IntroComponent } from './components/intro/intro.component';
const routes: Routes = [
  {
    path: 'fullstack-intern-developer',
    component: FullstackInternDeveloperComponent,
  },
  { path: 'pilote', component: PiloteComponent },
  { path: 'movies', component: MovieComponent },
  { path: '', component: IntroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
