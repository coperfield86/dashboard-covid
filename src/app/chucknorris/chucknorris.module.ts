import {NgModule} from '@angular/core';
import {ChucknorrisRoutingModule} from "./chucknorris-routing.module";
import { ChucknorrisComponent } from './components/chucknorris/chucknorris.component';
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [ChucknorrisComponent],
  imports: [
    ChucknorrisRoutingModule,
    SharedModule
  ],
})
export class ChucknorrisModule { }
