import { Component } from '@angular/core';
import { SpaceinvadersComponent } from '../games/spaceinvaders/spaceinvaders.component';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-games-site',
  standalone: true,
  imports: [SpaceinvadersComponent, RouterLink, RouterLinkActive],
  templateUrl: './games-site.component.html',
  styleUrl: './games-site.component.scss'
})
export class GamesSiteComponent {

}
