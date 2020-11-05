import { Component, OnInit } from '@angular/core';
import {GeoIpApiService} from "../../services/geo-ip-api.service";
import {GeoCountryInfo} from "../../models/geo-country-info";
import {CountryApiService} from "../../services/country-ip-api.service";
import {Country} from "../../models/country";

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  userCountryData: GeoCountryInfo;
  countries: Country[] = [];
  currentCountry: Country;

  constructor(private geoIpApiService: GeoIpApiService,
              private countryApiService: CountryApiService) { }

  ngOnInit(): void {
    this.countryApiService.getAll().subscribe((response: Country[]) => {
      this.countries = response
      this.setCurrentCountry();
    });

    this.geoIpApiService.getCountryInfo().subscribe((response: GeoCountryInfo) => {
      this.userCountryData = response;
      this.setCurrentCountry();
   });
  }

  onCurrentCountryChange(countryCode: string) {
    this.currentCountry = this.findCountryByCode(countryCode);
  }

  private setCurrentCountry() {
    if(this.countries.length > 0 && this.userCountryData) {
      this.currentCountry = this.findCountryByCode(this.userCountryData.country_code);
    }
  }

  private findCountryByCode(code: string) {
    const result = this.countries.filter(country => country.alpha2Code === code);
    if (result && result.length > 0) {
      return result[0];
    }
    return null;
  }

}
