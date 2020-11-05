import {Component, Input} from '@angular/core';
import {Country} from "../../models/country";

@Component({
  selector: 'app-country-data',
  templateUrl: './country-data.component.html',
  styleUrls: ['./country-data.component.scss']
})
export class CountryDataComponent {

  @Input() country: Country;

  constructor()  { }

}
