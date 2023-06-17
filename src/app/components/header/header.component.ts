import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string = 'suez test technique'; //on spécifie le type de la variable title (pas obligatoire)
  constructor() {}

  ngOnInit(): void {}

  toggleAddTask() {
    console.log('bouton vert cliqué');
  }

  toggleAddTask2() {
    console.log('bouton rouge cliqué');
  }
}
