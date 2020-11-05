import {Injectable} from '@angular/core';
import {RestClientService} from "../../core/services/rest-client.service";
import {AppConfigService} from "../../core/services/app-config.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GeoIpApiService {

  constructor(private restClientService: RestClientService,
              private appConfigService: AppConfigService) { }

  getCountryInfo(): Observable<any> {
    let apiUrl = `${this.appConfigService.getAppConfig().apiGeoIpUrl}`;
    return this.restClientService.get(apiUrl);
  }
}
