import { Component } from '@angular/core';
@Component({
  selector: 'app-spaceinvaders',
  standalone: true,
  imports: [],
  templateUrl: './spaceinvaders.component.html',
  styleUrl: './spaceinvaders.component.scss'
})

export class SpaceinvadersComponent {
  myScriptElement: HTMLScriptElement;
  constructor(){
    this.myScriptElement = document.createElement('script');
    this.myScriptElement.src = "../../src/assets/spaveinderjs.js";
    this.myScriptElement.type = "javascript";
    document.body.appendChild(this.myScriptElement);
/*     let grit;
    grit = document.querySelector('grit')!;
    const results = document.querySelector('.results');
    const width = 15;
    for (let i = 0; i < width * width; i++) {
      const square = document.createElement('div');
      grit.appendChild(square);
      console.log("square initiatet")
    }
    console.log("hallo " + typeof document.querySelector('.grit')) */
  }
}
