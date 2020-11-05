import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppConfigLoaderService} from "./services/app-config-loader.service";
import {RestClientService} from "./services/rest-client.service";



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    AppConfigLoaderService,
    RestClientService,
  ]
})
export class CoreModule { }
