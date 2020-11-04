import {Injectable} from '@angular/core';
import {RestClientService} from "../../core/services/rest-client.service";
import {AppConfigService} from "../../core/services/app-config.service";
import {Observable} from "rxjs";
import {ChuckNorrisInfo} from "../models/chuck-norris-info";

@Injectable({
  providedIn: 'root'
})
export class ChucknorrisApiService {

  constructor(private restClientService: RestClientService,
              private appConfigService: AppConfigService) { }

  getInfo(): Observable<ChuckNorrisInfo> {
    const chuckNorrisUrl = `${this.appConfigService.getAppConfig().apiChuckNorrisUrl}`;
    return this.restClientService.get(chuckNorrisUrl);
  }
}
