import { Component } from '@angular/core';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, RouterLink, Routes, RouterModule, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterModule, RouterLinkActive, NgbCollapse],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  constructor(private route: ActivatedRoute) {

  }
  public isMenuCollapsed = true;

}
