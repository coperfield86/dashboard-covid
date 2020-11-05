import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SharedModule} from "./shared/shared.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CoreModule} from "./core/core.module";
import {AppConfigLoaderService} from "./core/services/app-config-loader.service";
import {RestClientService} from "./core/services/rest-client.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    CoreModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      deps: [AppConfigLoaderService],
      useFactory: apiConfigProvider,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function apiConfigProvider(appConfigLoaderService: AppConfigLoaderService) {
  return () => appConfigLoaderService.loadConfiguration();
}
