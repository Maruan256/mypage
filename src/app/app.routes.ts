import { Routes, RouterLink, RouterLinkActive } from '@angular/router';
import { AnschreibenComponent } from './anschreiben/anschreiben.component';
import { DieseSeiteComponent } from './diese-seite/diese-seite.component';
import { ArbeitsprobenComponent } from './arbeitsproben/arbeitsproben.component';
import { CvComponent } from './cv/cv.component';
import { CssBattleComponent } from './css-battle/css-battle.component';
import { GamesSiteComponent } from './games-site/games-site.component';
import { SpaceinvadersComponent } from './games/spaceinvaders/spaceinvaders.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';

export const routes: Routes = [
  { path: 'anschreiben', component: AnschreibenComponent},
  { path: 'diese-seite', component: DieseSeiteComponent },
  { path: 'arbeitsproben', component: ArbeitsprobenComponent },
  { path: 'cv', component: CvComponent },
  { path: 'css-battle', component: CssBattleComponent },
  { path: 'games-site', component: GamesSiteComponent},
  { path: 'games/spaceinvaders', component: SpaceinvadersComponent},
  { path: 'coming-soon', component: ComingSoonComponent}
];
