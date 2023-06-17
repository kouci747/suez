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
    this.fetchData(1); // Fetch movies from the first page initially
  }

  allMovies: any[] = [];

  fetchData(page: number) {
    // Make the HTTP request to fetch movies from the specified page
    this.http
      .get(`http://localhost:5432/api/v1/movie/getMovie/${page}`)
      .subscribe((data: any) => {
        if (this.response && this.response.results) {
          // concatatenation des résultats : on ajoute les nouveaux résultats aux anciens
          this.response.results = this.response.results.concat(data.results);
        } else {
          // Initialize the response with the fetched data
          this.response = data;
        }
      });
  }

  loadMoreMovies() {
    const nextPage = this.response.page + 1; // Get the next page
    this.fetchData(nextPage); // Call the fetchData method with the next page number
  }
}
