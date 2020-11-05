import {NgModule} from '@angular/core';
import {CovidComponent} from './components/covid/covid.component';
import {CovidRoutingModule} from "./covid-routing.module";
import {SharedModule} from "../shared/shared.module";
import { CountryDataComponent } from './components/country-data/country-data.component';
import { ContainerComponent } from './components/container/container.component';
import {FormsModule} from "@angular/forms";
import {ChartsModule} from "ng2-charts";


@NgModule({
  declarations: [CovidComponent, CountryDataComponent, ContainerComponent],
  imports: [
    CovidRoutingModule,
    SharedModule,
    FormsModule,
    ChartsModule,
  ],
})
export class CovidModule { }
