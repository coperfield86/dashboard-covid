import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppConfigService} from './app-config.service';
import {AppConfig} from "../models/app-config";

@Injectable()
export class AppConfigLoaderService {
  private appConfig: AppConfig;
  private uriPrefix = 'assets/config/';
  private uriSuffix = '.json';

  constructor(private httpClient: HttpClient, private appConfigService: AppConfigService) {}

  public loadConfiguration(): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      this.httpClient.get<AppConfig>('./assets/app-config.json')
        .subscribe((appConfig) => {
          this.appConfigService.setAppConfig(appConfig);
          resolve(true);
        });
    });
  }

  public get(filename: string): Promise<any> {
    return this.httpClient.get<any>(this.uriPrefix + filename + this.uriSuffix).toPromise();
  }

    public getAppConfig(): AppConfig {
        return this.appConfig;
    }

    public setAppConfig(appConfig: AppConfig): void {
        this.appConfig = appConfig;
    }
}
