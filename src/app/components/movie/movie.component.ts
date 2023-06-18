import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent {
  response: any; // Variable pour stocker la réponse de la requête

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.fetchData(1); // au début, on récupère les données de la première page
  }

  allMovies: any[] = [];

  fetchData(page: number) {
    // Requete HTTP GET pour chercher les films à la page passée en paramètre
    this.http
      .get(`http://localhost:5432/api/v1/movie/getMovie/${page}`)
      .subscribe((data: any) => {
        if (this.response && this.response.results) {
          // concatatenation des résultats : on ajoute les nouveaux résultats aux anciens

          //en react, on aurait fait un spread operator [...this.response.results, ...data.results]
          this.response.results = this.response.results.concat(data.results);
        } else {
          this.response = data;
        }
        this.response.page = data.page; // je mets à jour la page courante.
        console.log('page récupérée: ', this.response.page);
      });
  }

  loadMoreMovies() {
    // on récupère la page courante et on l'incrémente pour la requête suivante
    const nextPage = (this.response.page || 1) + 1;
    // on appelle la fonction fetchData avec la page suivante
    this.fetchData(nextPage);
  }
}
