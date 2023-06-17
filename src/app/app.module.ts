import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { FullstackInternDeveloperComponent } from './components/fullstack-intern-developer/fullstack-intern-developer.component';
import { PiloteComponent } from './components/pilote/pilote.component';
import { MovieComponent } from './components/movie/movie.component';

//pour utiliser Lottie
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { IntroComponent } from './components/intro/intro.component';
import { FooterComponent } from './components/footer/footer.component';

export function playerFactory(): any {
  return import('lottie-web');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    FullstackInternDeveloperComponent,
    PiloteComponent,
    MovieComponent,
    IntroComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LottieModule.forRoot({ player: playerFactory }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
