import { Injectable } from '@angular/core';
import {RestClientService} from "../../core/services/rest-client.service";
import {AppConfigService} from "../../core/services/app-config.service";
import {Observable} from "rxjs";
import {NumberInfo} from "../models/number-info";

@Injectable({
  providedIn: 'root'
})
export class NumbersApiService {

  constructor(private restClientService: RestClientService,
              private appConfigService: AppConfigService) { }

  getNumberInfo(): Observable<NumberInfo> {
    const maxNumber = this.appConfigService.getAppConfig().maxNumber;
    const number = Math.floor(Math.random() * Math.floor(maxNumber));

    const apiNumbersUrl = `${this.appConfigService.getAppConfig().apiNumbersUrl}/${number}?json`;
    return this.restClientService.get(apiNumbersUrl);
  }
}
