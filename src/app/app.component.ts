import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CatalogoComponent } from './catalogo/catalogo.component';
import {RouterModule} from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ CatalogoComponent, RouterModule, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-template-catalogo';
}
