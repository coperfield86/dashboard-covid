import {Injectable} from '@angular/core';
import {RestClientService} from "../../core/services/rest-client.service";
import {AppConfigService} from "../../core/services/app-config.service";
import {Observable} from "rxjs";
import {CovidResponse} from "../models/covid-response";

@Injectable({
  providedIn: 'root'
})
export class CovidApiService {

  constructor(private restClientService: RestClientService,
              private appConfigService: AppConfigService) { }

  getInfo(country?: string): Observable<CovidResponse> {
    let apiCovidUrl = `${this.appConfigService.getAppConfig().apiCovidUrl}`;
    if (country) {
      apiCovidUrl = `${this.appConfigService.getAppConfig().apiCovidUrl}?country=${country}`
    }
    return this.restClientService.get(apiCovidUrl);
  }
}
