import { Component } from '@angular/core';
import { ImageAdressesComponent } from '../image-adresses/image-adresses.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [ImageAdressesComponent, CommonModule],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.scss'
})

export class CvComponent {

  constructor(){

  }

   imagesAdresses: string[] = [
    "../../assets/images/png-512/Angular.png",
    "../../assets/images/png-512/Ant-Design.png",
    "../../assets/images/png-512/Apache-Maven.png",
    "../../assets/images/png-512/Babel.png",
    "../../assets/images/png-512/CSS3.png",
    "../../assets/images/png-512/Bash.png",
    "../../assets/images/png-512/BitBucket.png",
    "../../assets/images/png-512/Bootstrap.png",
    "../../assets/images/png-512/Canva.png",
    "../../assets/images/png-512/CentOS.png",
    "../../assets/images/png-512/CodePen.png",
    "../../assets/images/png-512/CoffeeScript.png",
    "../../assets/images/png-512/ESLint.png",
    "../../assets/images/png-512/Figma.png",
    "../../assets/images/png-512/FileZilla.png",
    "../../assets/images/png-512/Firebase.png",
    "../../assets/images/png-512/Git.png",
    "../../assets/images/png-512/GitBook.png",
    "../../assets/images/png-512/GitLab.png",
    "../../assets/images/png-512/Google-Cloud.png",
    "../../assets/images/png-512/Google.png",
    "../../assets/images/png-512/Heroku.png",
    "../../assets/images/png-512/Homebrew.png",
    "../../assets/images/png-512/HTML5.png",
    "../../assets/images/png-512/IntelliJ-IDEA.png",
    "../../assets/images/png-512/Java.png",
    "../../assets/images/png-512/JavaScript.png",
    "../../assets/images/png-512/Jenkins.png",
    "../../assets/images/png-512/JetBrains.png",
    "../../assets/images/png-512/Jira.png",
    "../../assets/images/png-512/jQuery.png",
    "../../assets/images/png-512/JSON.png",
    "../../assets/images/png-512/Material-UI.png",
    "../../assets/images/png-512/Mocha.png",
    "../../assets/images/png-512/MySQL.png",
    "../../assets/images/png-512/Nano.png",
    "../../assets/images/png-512/NGINX.png",
    "../../assets/images/png-512/Node.js.png",
    "../../assets/images/png-512/NPM.png",
    "../../assets/images/png-512/Oh-my-zsh.png",
    "../../assets/images/png-512/OpenAPI.png",
    "../../assets/images/png-512/openSUSE.png",
    "../../assets/images/png-512/PostCSS.png",
    "../../assets/images/png-512/PostgresSQL.png",
    "../../assets/images/png-512/Postman.png",
    "../../assets/images/png-512/Powershell.png",
    "../../assets/images/png-512/PuTTY.png",
    "../../assets/images/png-512/React.png",
    "../../assets/images/png-512/Ruby-on-Rails.png",
    "../../assets/images/png-512/Ruby.png",
    "../../assets/images/png-512/Sass.png",
    "../../assets/images/png-512/Slack.png",
    "../../assets/images/png-512/Spring.png",
    "../../assets/images/png-512/SQLite.png",
    "../../assets/images/png-512/SSH.png",
    "../../assets/images/png-512/Tailwind-CSS.png",
    "../../assets/images/png-512/Trello.png",
    "../../assets/images/png-512/TypeScript.png",
    "../../assets/images/png-512/Vim.png",
    "../../assets/images/png-512/Visual-Studio-Code-(VS-Code).png",
    "../../assets/images/png-512/Webpack.png",
    "../../assets/images/png-512/XML.png",
    "../../assets/images/png-512/YAML.png",
    "../../assets/images/png-512/Yarn.png",
  ]

}
