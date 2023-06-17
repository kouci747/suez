import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent {
  // movies: any[] = []; // Initialisation avec null

  // constructor(private http: HttpClient) {}

  // ngOnInit(): void {
  //   this.getMovies();
  // }

  // getMovies(): void {
  //   const page = 1; // on commence par la page 1 puis je fais une pagination type "infinite scroll"
  //   const apiUrl = 'http://localhost:5432/api/v1/movie/getMovie';

  //   this.http.get<any>(`${apiUrl}/${page}`).subscribe(
  //     (data) => {
  //       this.movies = data;
  //     },
  //     (error) => {
  //       console.error('Error:', error);
  //     }
  //   );
  // }

  response: any; // Variable pour stocker la réponse de la requête

  constructor(private http: HttpClient) {
    this.fetchData();
  }

  fetchData() {
    // Effectuer la requête HTTP pour obtenir les données
    this.http
      .get('http://localhost:5432/api/v1/movie/getMovie/:page')
      .subscribe((data: any) => {
        this.response = data; // Stocker la réponse dans la variable
      });
  }
}
