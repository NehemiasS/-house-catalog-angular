import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hose-catalogo-location',
  imports: [CommonModule, RouterModule ],
  templateUrl: './hose-catalogo-location.component.html',
  styleUrl: './hose-catalogo-location.component.css'
})


export class HoseCatalogoLocationComponent {
  
  @Input() housingLocation!: HousingLocation;

}

