import {Injectable} from '@angular/core';
import {AppConfig} from "../models/app-config";

@Injectable({
    providedIn: 'root',
})
export class AppConfigService {
    private appConfig: AppConfig;

    constructor() {}

    public getAppConfig(): AppConfig {
        return this.appConfig;
    }

    public setAppConfig(appConfig: AppConfig): void {
        this.appConfig = appConfig;
    }
}
