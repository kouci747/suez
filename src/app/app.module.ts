import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { FullstackInternDeveloperComponent } from './components/fullstack-intern-developer/fullstack-intern-developer.component';
import { PiloteComponent } from './components/pilote/pilote.component';
import { MovieComponent } from './components/movie/movie.component';

// const AppRoutes: Routes = [
//   { path: '', component: AppComponent },

// ];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    FullstackInternDeveloperComponent,
    PiloteComponent,
    MovieComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
