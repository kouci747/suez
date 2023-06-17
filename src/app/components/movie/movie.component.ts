import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent {
  response: any; // Variable pour stocker la réponse de la requête

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.fetchData();
  }

  fetchData() {
    this.route.params.subscribe((params) => {
      const page = params['page'] || 1; // Read the page parameter from the URL
      // Effectuer la requête HTTP pour obtenir les données
      this.http
        .get(`http://localhost:5432/api/v1/movie/getMovie/${page}`)
        .subscribe((data: any) => {
          this.response = data; // Stocker la réponse dans la variable
        });
    });
  }
}
