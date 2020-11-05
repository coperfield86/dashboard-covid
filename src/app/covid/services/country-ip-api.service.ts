import {Injectable} from '@angular/core';
import {RestClientService} from "../../core/services/rest-client.service";
import {AppConfigService} from "../../core/services/app-config.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CountryApiService {

  constructor(private restClientService: RestClientService,
              private appConfigService: AppConfigService) { }

  getAll(): Observable<any> {
    let apiUrl = `${this.appConfigService.getAppConfig().apiCountryUrl}`;
    return this.restClientService.get(apiUrl);
  }
}
