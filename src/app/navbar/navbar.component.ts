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
  public isClosed = false;
checkIsClosed(e:Event){
  this.isClosed = !this.isClosed;
  console.log("closing" + this.isClosed + " " + e.type)
}
}
