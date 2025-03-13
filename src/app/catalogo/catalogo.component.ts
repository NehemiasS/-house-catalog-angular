import { Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import { HoseCatalogoLocationComponent } from '../hose-catalogo-location/hose-catalogo-location.component';
import {HousingLocation} from '../housinglocation';
import {HousingService} from '../housing.service';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule, HoseCatalogoLocationComponent ],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent {
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  filteredLocationList:HousingLocation [] = [];

  constructor() {
    this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) => {
      this.housingLocationList = housingLocationList;
      this.filteredLocationList = housingLocationList;
    });
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }
    this.filteredLocationList = this.housingLocationList.filter((housingLocation) =>
      housingLocation?.city.toLowerCase().includes(text.toLowerCase()),
    );
  }
  
}