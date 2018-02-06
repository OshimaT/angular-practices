import { Component } from '@angular/core';

import { Hero } from './hero';

@Component({
  selector: 'app-root',
  template:
            ` <h1>{{title}}</h1>
              <h2>My favourite hero is: {{myHero}}
              <p>Heroes</p>
              <li *ngFor = "let hero of heroes">
                {{hero.name}}
              </li>
              <p *ngIf = "heroes.length > 2">There are many heroes</p>
            `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  myHero: string;
  heroes = [];
  constructor() {
     this.heroes = [
                      new Hero(1, 'Windston'),
                      new Hero(2, 'Bombasto'),
                      new Hero(3, 'Magneta'),
                      new Hero(4, 'Tornado')
                    ];
     this.title = 'Tour Of Heroes';
     this.myHero = this.heroes[0];
  }
}
