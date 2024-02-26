import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, Routes, RouterModule, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterModule, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(private route: ActivatedRoute) {

  }
}
